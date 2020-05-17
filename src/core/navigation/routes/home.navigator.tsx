import React from 'react';
import {RouteProp} from '@react-navigation/core';
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeBottomNavigation} from "../../../screen/home/home-bottom-navigation.component";
import {HomeDrawer} from "../../../screen/home/home-drawer.component";
import {ProfileNavigation} from "./profile.navigation";
import {HistoryNavigation} from "./history.navigation";
import {MyOrdersNavigation} from "./my-orders.navigation";
import {NotificationsScreen} from "../../../screen/notifications/notifications.screen";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const initialTabRoute: string = 'MyOrders';

const ROOT_ROUTES: string[] = ['Home', 'MyOrders', 'History', 'Profile'];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
    return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({route}): BottomTabNavigationOptions => {
    const currentRoute = route.state && route.state.routes[route.state.index];
    return {tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute)};
};

const HomeTabsNavigator = (): React.ReactElement => (
    <BottomTab.Navigator
        screenOptions={TabBarVisibleOnRootScreenOptions}
        initialRouteName={initialTabRoute}
        tabBar={props => <HomeBottomNavigation {...props} />}>
        <BottomTab.Screen name='MyOrders' component={MyOrdersNavigation}/>
        <BottomTab.Screen name='History' component={HistoryNavigation}/>
        <BottomTab.Screen name='Notifications' component={NotificationsScreen}/>
        <BottomTab.Screen name='Profile' component={ProfileNavigation}/>
    </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
    <Drawer.Navigator
        screenOptions={{gestureEnabled: true}}
        drawerContent={props => <HomeDrawer {...props}/>}>
        <Drawer.Screen name='Home' component={HomeTabsNavigator}/>
    </Drawer.Navigator>
);
