import {Dispatch} from "redux";
import {AuthService} from "application/auth/auth.service";


export class SocialService extends AuthService {
    googleSignInAsync = (): any => async (dispatch: Dispatch) => {

    }
}