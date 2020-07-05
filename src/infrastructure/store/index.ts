import AsyncStorage from "@react-native-community/async-storage";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {persistReducer} from 'redux-persist';


const rootReducer = combineReducers({

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
            'system'
        ],
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    return createStore(
        persistedReducer,
        undefined,
        composeWithDevTools(middleWareEnhancer),
    );
}
