import {Dispatch} from "redux";
import {AuthActions} from "../../infrastructure/store/auth/actions";
import {localization} from "localization/index";

export class AuthService {
    login = (login: string, password: string): any => async (dispatch: Dispatch) => {
        dispatch(AuthActions.logInRequest());
        let authResult = null;
        try {

        } catch (e) {
            dispatch(AuthActions.logInError());
            console.log(e, 'error');
            throw new Error(localization.errors.loginError);
        }
        return authResult;
    }

    resendCode = (requestId: string): any => async (dispatch: Dispatch) => {
        dispatch(AuthActions.resendCodeRequest());
        let authResult = null;
        try {

        } catch (e) {
            dispatch(AuthActions.resendCodeError());
            console.log(e, 'error');
            throw new Error(localization.errors.loginError);
        }
        return authResult;
    }

    logOut = (): any => async (dispatch: Dispatch) => {
        dispatch(AuthActions.logOut());
    }
}