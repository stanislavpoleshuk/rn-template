import React from "react";
import {LoginScreen} from "screens/auth/login/login.screen";
import {createStackNavigator} from "@react-navigation/stack";
import {PhoneConfirmScreen} from "screens/auth/phone-confirm/phone-confirm.screen";
import {CheckinScreen} from "screens/auth/checkin/checkin.screen";
import {RestorePasswordScreen} from "screens/auth/restore-password/restore-password.screen";
import {ChangePasswordScreen} from "screens/auth/change-password/change-password.screen";

const Stack = createStackNavigator();

export type AuthStackParamList = {
    Login: undefined;
    Checkin: undefined;
    PhoneConfirm: undefined;
    RestorePassword: undefined;
    ChangePassword: undefined;
};

export const AuthNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Checkin" component={CheckinScreen}/>
        <Stack.Screen name="RestorePassword" component={RestorePasswordScreen}/>
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen}/>
        <Stack.Screen name="PhoneConfirm" component={PhoneConfirmScreen}/>
    </Stack.Navigator>
)
