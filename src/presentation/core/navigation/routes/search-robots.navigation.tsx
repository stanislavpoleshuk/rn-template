import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

export type RobotsStackParamList = {
    Robots: undefined;
    SearchRobots: { userId: string };
};

const Stack = createStackNavigator();

export const SearchRobotsNavigation = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'}>
        
    </Stack.Navigator>
)