import React from 'react';
import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeBottomNavigation} from "screens/home/home-bottom-navigation.component";
import {HomeDrawer} from "screens/home/home-drawer.component";
import {SearchRobotsNavigation} from "./search-robots.navigation";
import {createStackNavigator} from "@react-navigation/stack";
import {RobotsScreen} from "screens/robots/robots.screen";
import {SignalsScreen} from "screens/signals/signals.screen";
import {NotificationsScreen} from "screens/notifications/notifications.screen";
import {ProfileScreen} from "screens/profile/profile.screen";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const initialTabRoute: string = 'Home';

const HomeTabsNavigator = (): React.ReactElement => (
    <BottomTab.Navigator
        initialRouteName={initialTabRoute}
        tabBar={props => <HomeBottomNavigation {...props} />}>
        <BottomTab.Screen name='Robots' component={RobotsScreen}/>
        <BottomTab.Screen name='Signals' component={SignalsScreen}/>
        <BottomTab.Screen name='Notifications' component={NotificationsScreen}/>
        <BottomTab.Screen name='Profile' component={ProfileScreen}/>
    </BottomTab.Navigator>
);

export const HomeDrawerNavigator  = (): React.ReactElement => (
    <Drawer.Navigator
        screenOptions={{gestureEnabled: true}}
        drawerContent={props => <HomeDrawer {...props}/>}>
        <Drawer.Screen name='Home' component={HomeTabsNavigator}/>
    </Drawer.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={HomeDrawerNavigator}/>
        <Stack.Screen name='SearchRobots' component={SearchRobotsNavigation}/>
    </Stack.Navigator>
)