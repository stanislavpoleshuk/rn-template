import {
    LOG_OUT,
    SET_ACCESS_TOKEN, SET_REFRESH_TOKEN,
    AuthState,
    AuthTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, RESEND_CODE_REQUEST, RESEND_CODE_SUCCESS, RESEND_CODE_ERROR,
} from './types';

const initial: AuthState = {
    loading: false,
    accessToken: undefined,
    refreshToken: undefined,
    requestId: undefined,
    confirmCode: undefined
};

export function AuthReducer(
    state = initial,
    action: AuthTypes,
): AuthState {
    switch (action.type) {

        case LOGIN_REQUEST: {
            return {
                ...state,
                loading: true
            };
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                requestId: action.requestId,
                confirmCode: action.confirmCode
            };
        }

        case LOGIN_ERROR: {
            return {
                ...state,
                loading: false
            };
        }

        case RESEND_CODE_REQUEST: {
            return {
                ...state,
                loading: true,
                requestId: undefined,
                confirmCode: undefined
            };
        }

        case RESEND_CODE_SUCCESS: {
            return {
                ...state,
                loading: false,
                requestId: action.requestId,
                confirmCode: action.confirmCode
            };
        }

        case RESEND_CODE_ERROR: {
            return {
                ...state,
                loading: false,
                requestId: undefined,
                confirmCode: undefined
            };
        }

        case SET_ACCESS_TOKEN: {
            return {
                ...state,
                accessToken: action.accessToken,
            };
        }

        case SET_REFRESH_TOKEN: {
            return {
                ...state,
                refreshToken: action.refreshToken,
            };
        }

        case LOG_OUT: {
            return {
                ...state,
                accessToken: undefined,
                refreshToken: undefined,
            };
        }

        default:
            return state;
    }
}
