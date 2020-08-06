import React from "react";
import {LoginScreen} from "screens/auth/login/login.screen";
import {PhoneConfirmScreen} from "screens/auth/phone-confirm/phone-confirm.screen";
import {CheckinScreen} from "screens/auth/checkin/checkin.screen";
import {RestorePasswordScreen} from "screens/auth/restore-password/restore-password.screen";
import {ChangePasswordScreen} from "screens/auth/change-password/change-password.screen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {BaseNavigationConfig} from "core/navigation/config/base-navigation.config";

const Stack = createNativeStackNavigator();

const screenOptions = {
    ...BaseNavigationConfig.hideHeader,
}

export type AuthStackParamList = {
    Login: undefined;
    Checkin: undefined;
    PhoneConfirm: undefined;
    RestorePassword: undefined;
    ChangePassword: undefined;
};

export const AuthNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'} screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Checkin" component={CheckinScreen}/>
        <Stack.Screen name="RestorePassword" component={RestorePasswordScreen}/>
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen}/>
        <Stack.Screen name="PhoneConfirm" component={PhoneConfirmScreen}/>
    </Stack.Navigator>
)
