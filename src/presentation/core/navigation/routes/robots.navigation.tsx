import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {AuthNavigator} from "core/navigation/routes/auth.navigator";

export type RobotsStackParamList = {
    Robots: undefined;
    Auth: undefined;
};

const Stack = createStackNavigator();

export const RobotsNavigation = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name='Auth' component={AuthNavigator}/>
    </Stack.Navigator>
)