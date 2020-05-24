import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {OrdersScreen} from "../../../screen/orders/orders.screen";

const Stack = createStackNavigator();

export const MyOrdersNavigation = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name='MyOrders' component={OrdersScreen}/>
    </Stack.Navigator>
)