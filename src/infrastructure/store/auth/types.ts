export type AuthState = {
    loading: boolean;
    accessToken: string | undefined;
    refreshToken: string | undefined;
    requestId: string | undefined;
    confirmCode: string | undefined;
}

export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST';

interface logInRequest {
    type: typeof LOGIN_REQUEST;
}

export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';

interface logInSuccess {
    type: typeof LOGIN_SUCCESS;
    requestId: string;
    confirmCode: string;
}

export const LOGIN_ERROR = 'AUTH/LOGIN_ERROR';

interface logInError {
    type: typeof LOGIN_ERROR;
}

export const RESEND_CODE_REQUEST = 'AUTH/RESEND_CODE_REQUEST';

interface resendCodeRequest {
    type: typeof RESEND_CODE_REQUEST;
}

export const RESEND_CODE_SUCCESS = 'AUTH/RESEND_CODE_SUCCESS';

interface resendCodeSuccess {
    type: typeof RESEND_CODE_SUCCESS;
    requestId: string;
    confirmCode: string;
}

export const RESEND_CODE_ERROR = 'AUTH/RESEND_CODE_ERROR';

interface resendCodeError {
    type: typeof RESEND_CODE_ERROR;
}

export const SET_ACCESS_TOKEN = 'AUTH/SET_ACCESS_TOKEN';

interface setAccessToken {
    type: typeof SET_ACCESS_TOKEN;
    accessToken: string;
}

export const SET_REFRESH_TOKEN = 'AUTH/SET_REFRESH_TOKEN';

interface setRefreshToken {
    type: typeof SET_REFRESH_TOKEN;
    refreshToken: string;
}

export const LOG_OUT = 'AUTH/LOG_OUT';

interface logOut {
    type: typeof LOG_OUT;
}

export type AuthTypes =
    logInRequest | logInSuccess | logInError |
    resendCodeRequest | resendCodeSuccess | resendCodeError |
    setAccessToken | setRefreshToken |
    logOut;
