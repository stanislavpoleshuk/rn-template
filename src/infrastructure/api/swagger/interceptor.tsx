import axios, {AxiosInstance} from "axios";
import {logOut, saveTokens} from "../../../../../volunteers/volunteers.rn/src/core/service/user/auth.service";
import {RefreshTokenCommand} from "./swagger-client";
import AsyncStorage from "@react-native-community/async-storage";
import {RequestRepository} from "../requestRepository";

const IS_ALREADY_FETCHING_ACCESS_TOKEN = "IS_ALREADY_FETCHING_ACCESS_TOKEN";

export class Interceptor {
    private instance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    init = () => {
        this.createRequestInterceptor();
        this.createResponseInterceptor();
    };

    createRequestInterceptor = () => {
        this.instance.interceptors.request.use(async function (config) {
            await AsyncStorage.getItem('accessToken').then(token => {
                console.log(token, 'access_token');

                if (token != null) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            });
            return config;
        }, function (err) {
            return Promise.reject(err);
        });
    };


    createResponseInterceptor() {
        const self = this;
        this.instance.interceptors.response.use(
            function (response) {
                // If the request succeeds, we don't have to do anything and just return the response
                return response
            },
            async (error) => {
                if (await self.isTokenExpiredError(error)) {
                    return await self.resetTokenAndReattemptRequest(error)
                }
                // If the error is due to other reasons, we just throw it back to axios
                return Promise.reject(error)
            }
        )
    }

    isTokenExpiredError = async (error: any) => {
        const status = error.response ? error.response.status : null;
        const token = await AsyncStorage.getItem('accessToken');
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        if (status === 401 && token && refreshToken) {
            return true;
        }
        return false;
    };


    //isAlreadyFetchingAccessToken = false;
// This is the list of waiting requests that will retry after the JWT refresh complete
    subscribers: any[] = [];


    resetTokenAndReattemptRequest = async (error: any) => {
        try {
            const {response: errorResponse} = error;
            // const token = await AsyncStorage.getItem('accessToken');
            // const refreshToken = await AsyncStorage.getItem('accessToken');

            AsyncStorage.multiGet(['accessToken', 'accessToken']).then(async (result: [string, string][]) => {
                if (!result || result.length != 4)
                    return Promise.reject(error);
                const token = result[0][1];
                const refreshToken = result[0][1];
                console.log('resetToken');
                console.log('token', token);
                console.log('refreshToken', refreshToken);
                
                /* Proceed to the token refresh procedure
                            We create a new Promise that will retry the request,
                            clone all the request configuration from the failed
                            request in the error object. */
                const retryOriginalRequest = new Promise(resolve => {
                    /* We need to add the request retry to the queue
                    since there another request that already attempt to
                    refresh the token */
                    this.addSubscriber((access_token: any) => {
                        errorResponse.config.headers.Authorization = 'Bearer ' + access_token;
                        resolve(axios(errorResponse.config));
                    });
                });
                const self = this;
                let isAlreadyFetchingAccessToken = await AsyncStorage.getItem(IS_ALREADY_FETCHING_ACCESS_TOKEN);
                if (!isAlreadyFetchingAccessToken) {
                    isAlreadyFetchingAccessToken = "Error";
                    await AsyncStorage.setItem(IS_ALREADY_FETCHING_ACCESS_TOKEN, isAlreadyFetchingAccessToken);

                    const apiClient = new RequestRepository();
                    let newToken = null;

                    await apiClient.volunteer_RefreshToken(new RefreshTokenCommand({
                        accessToken: token,
                        refreshToken: refreshToken
                    }))
                        .then(async (response) => {
                            if (response && response.accessToken) {
                                newToken = response.accessToken.token as string;
                                await saveTokens(response.accessToken.token as string, response.refreshToken as string);
                                error.response.config.headers['Authorization'] = 'Bearer ' + response.accessToken.token;
                                await AsyncStorage.removeItem(IS_ALREADY_FETCHING_ACCESS_TOKEN);
                                self.onAccessTokenFetched(newToken);
                            }
                        })
                        .catch(async (e) => {
                            return Promise.reject(error);
                        });
                } else {
                    await logOut();
                    await AsyncStorage.removeItem(IS_ALREADY_FETCHING_ACCESS_TOKEN);
                }
                return retryOriginalRequest;

            })

        } catch (err) {
            await logOut();
            await AsyncStorage.removeItem(IS_ALREADY_FETCHING_ACCESS_TOKEN);
            return Promise.reject(err);
        }
    };


    onAccessTokenFetched(access_token: any) {
        // When the refresh is successful, we start retrying the requests one by one and empty the queue
        this.subscribers.forEach(callback => callback(access_token));
        this.subscribers = [];
    }


    addSubscriber(callback: any) {
        this.subscribers.push(callback);
    }
}
