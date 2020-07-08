import AsyncStorage from "@react-native-community/async-storage";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {persistReducer} from 'redux-persist';
import {UserReducer} from "./user/reducers";
import {AuthReducer} from "./auth/reducers";

const rootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer
});

export type IAppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middleWares = [
        thunkMiddleware
    ];
    const middleWareEnhancer = applyMiddleware(...middleWares);

    const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
        whitelist: [
            'system',
            'auth',
        ],
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    return createStore(
        persistedReducer,
        undefined,
        composeWithDevTools(middleWareEnhancer),
    );
}
