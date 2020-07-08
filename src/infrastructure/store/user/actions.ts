import {
    FETCH_CURRENT_USER_ERROR,
    FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_SUCCESS,
} from './types';

export class UserActions {
    static fetchCurrentUserRequest = function () {
        return {
            type: FETCH_CURRENT_USER_REQUEST,
        };
    };

    static fetchCurrentUserSuccess = function (response: any) {
        return {
            type: FETCH_CURRENT_USER_SUCCESS,
            profile: response,
        };
    };

    static fetchCurrentUserError = function () {
        return {
            type: FETCH_CURRENT_USER_ERROR,
        };
    };
}
