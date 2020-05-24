import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {HistoryScreen} from "../../../screen/history/history.screen";


const Stack = createStackNavigator();

export const HistoryNavigation = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name='History' component={HistoryScreen}/>
    </Stack.Navigator>
)