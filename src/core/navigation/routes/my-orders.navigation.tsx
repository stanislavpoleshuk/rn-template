import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {MyOrdersScreen} from "../../../screen/order/my-orders.screen";

const Stack = createStackNavigator();

export const MyOrdersNavigation = (): React.ReactElement => (
    <Stack.Navigator>
        <Stack.Screen name='MyOrders' component={MyOrdersScreen}/>
    </Stack.Navigator>
)