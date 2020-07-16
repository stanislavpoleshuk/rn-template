import React from "react";
import {LoginScreen} from "screens/auth/login/login.screen";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {PhoneConfirmScreen} from "screens/auth/phone-confirm/phone-confirm.screen";
import {CheckinScreen} from "screens/auth/checkin/checkin.screen";
import {RestorePasswordScreen} from "screens/auth/restore-password/restore-password.screen";

const Stack = createStackNavigator();

export type AuthStackParamList = {
    Login: undefined;
    Checkin: undefined;
    PhoneConfirm: undefined;
    RestorePassword: undefined;
};

const modalOptions = {
    ...TransitionPresets.ModalPresentationIOS,
    gestureEnabled: true,
    cardOverlayEnabled: true,
}

export const AuthNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'} mode='card' screenOptions={modalOptions}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Checkin" component={CheckinScreen}/>
        <Stack.Screen name="RestorePassword" component={RestorePasswordScreen}/>
    </Stack.Navigator>
)

export const PhoneConfirmNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'} mode='card'>
        <Stack.Screen name="PhoneConfirm" component={PhoneConfirmScreen}/>
    </Stack.Navigator>
)