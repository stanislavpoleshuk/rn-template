import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ProfileScreen} from "../../../screen/profile/profile.screen";

const Stack = createStackNavigator();

export const ProfileNavigation = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
    </Stack.Navigator>
)