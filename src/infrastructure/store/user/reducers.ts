import {
    FETCH_CURRENT_USER_ERROR,
    FETCH_CURRENT_USER_REQUEST,
    FETCH_CURRENT_USER_SUCCESS,
    UserState,
    UserTypes,
} from './types';

const initial: UserState = {
    isLoading: false,
    profile: null,
};

export function UserReducer(
    state = initial,
    action: UserTypes,
): UserState {
    switch (action.type) {

        case FETCH_CURRENT_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case FETCH_CURRENT_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                profile: action.profile,
            };
        }

        case FETCH_CURRENT_USER_ERROR: {
            return {
                ...state,
                isLoading: false,
            };
        }

        default:
            return state;
    }
}
