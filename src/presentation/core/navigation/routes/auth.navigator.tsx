import React from "react";
import {LoginScreen} from "screens/auth/login/login.screen";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {PhoneConfirmScreen} from "screens/auth/phone-confirm/phone-confirm.screen";

const Stack = createStackNavigator();

export type AuthStackParamList = {
    Login: undefined;
    PhoneConfirm: undefined;
};

const modalOptions = {
    ...TransitionPresets.ModalPresentationIOS,
    gestureEnabled: true,
    cardOverlayEnabled: true,
}

export const AuthNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'} mode='card' screenOptions={modalOptions}>
        <Stack.Screen name="Login" component={LoginScreen}/>
    </Stack.Navigator>
)

export const PhoneConfirmNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'} mode='card' screenOptions={modalOptions}>
        <Stack.Screen name="PhoneConfirm" component={PhoneConfirmScreen}/>
    </Stack.Navigator>
)