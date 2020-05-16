import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {HistoryScreen} from "../../../screen/history/history.screen";


const Stack = createStackNavigator();

export const HistoryNavigation = (): React.ReactElement => (
    <Stack.Navigator>
        <Stack.Screen name='History' component={HistoryScreen}/>
    </Stack.Navigator>
)