import {
    LOG_OUT,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, RESEND_CODE_ERROR,
    RESEND_CODE_REQUEST, RESEND_CODE_SUCCESS,
    SET_ACCESS_TOKEN,
    SET_REFRESH_TOKEN
} from './types';


export class AuthActions {

    static logInRequest = function () {
        return {
            type: LOGIN_REQUEST,
        };
    };

    static logInSuccess = function (requestId: string, confirmCode: string) {
        return {
            type: LOGIN_SUCCESS,
            requestId,
            confirmCode
        };
    };

    static logInError = function () {
        return {
            type: LOGIN_ERROR,
        };
    };

    static resendCodeRequest = function () {
        return {
            type: RESEND_CODE_REQUEST,
        };
    };

    static resendCodeSuccess = function (requestId: string, confirmCode: string) {
        return {
            type: RESEND_CODE_SUCCESS,
            requestId,
            confirmCode
        };
    };

    static resendCodeError = function () {
        return {
            type: RESEND_CODE_ERROR,
        };
    };

    static setToken = function (token: string) {
        return {
            type: SET_ACCESS_TOKEN,
            authToken: token,
        };
    };

    static setRefreshToken = function (token: string) {
        return {
            type: SET_REFRESH_TOKEN,
            refreshToken: token,
        };
    };

    static logOut = function () {
        return {
            type: LOG_OUT,
        };
    };
}