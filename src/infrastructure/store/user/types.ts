export type UserState = {
    isLoading: boolean;
    profile: any | null;
}

export const FETCH_CURRENT_USER_REQUEST = 'USER/FETCH_CURRENT_USER_REQUEST';

interface fetchCurrentUserRequest {
    type: typeof FETCH_CURRENT_USER_REQUEST;
}

export const FETCH_CURRENT_USER_SUCCESS = 'USER/FETCH_CURRENT_USER_SUCCESS';

interface fetchCurrentUserSuccess {
    type: typeof FETCH_CURRENT_USER_SUCCESS;
    profile: any
}

export const FETCH_CURRENT_USER_ERROR = 'USER/FETCH_CURRENT_USER_ERROR';

interface fetchCurrentUserError {
    type: typeof FETCH_CURRENT_USER_ERROR;
}


export type UserTypes = fetchCurrentUserRequest | fetchCurrentUserSuccess | fetchCurrentUserError;
