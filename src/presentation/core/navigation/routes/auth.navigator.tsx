import React from "react";
import {RobotsModal} from "../../../modals/auth/auth.modal";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

const Stack = createStackNavigator();

export type AuthStackParamList = {
    Auth: undefined;
};


const modalOptions = {
    ...TransitionPresets.ModalPresentationIOS,
    gestureEnabled: true,
    cardOverlayEnabled: true,
}

export const AuthNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'} mode={'modal'} screenOptions={modalOptions}>
        <Stack.Screen name="Auth" component={RobotsModal}/>
    </Stack.Navigator>
)