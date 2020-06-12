import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {SearchRobotsScreen} from "screens/robots/search/search-robots.screen";

export type RobotsStackParamList = {
    Robots: undefined;
    SearchRobots: { userId: string };
};

const Stack = createStackNavigator();

export const SearchRobotsNavigation = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name='SearchRobots' component={SearchRobotsScreen}/>
    </Stack.Navigator>
)