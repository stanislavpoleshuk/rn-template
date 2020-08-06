import React from 'react';
import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeBottomNavigation} from "screens/home/home-bottom-navigation.component";
import {HomeDrawer} from "screens/home/home-drawer.component";
import {RobotsScreen} from "screens/robots/robots.screen";
import {SignalsScreen} from "screens/signals/signals.screen";
import {NotificationsScreen} from "screens/notifications/notifications.screen";
import {ProfileScreen} from "screens/profile/profile.screen";
import {AuthNavigator} from "core/navigation/routes/auth.navigator";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {BaseNavigationConfig} from "core/navigation/config/base-navigation.config";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const MainStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

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

export const HomeDrawerNavigator = (): React.ReactElement => (
    <Drawer.Navigator
        screenOptions={{gestureEnabled: true}}
        drawerContent={props => <HomeDrawer {...props}/>}>
        <Drawer.Screen name='Home' component={HomeTabsNavigator}/>
    </Drawer.Navigator>
);

const MainStackScreen = (): React.ReactElement => {
    return (
        <MainStack.Navigator screenOptions={BaseNavigationConfig.hideHeader}>
            <MainStack.Screen name="Home" component={HomeDrawerNavigator}/>
        </MainStack.Navigator>
    );
}


export const HomeNavigator = (): React.ReactElement => {
    return (
        <RootStack.Navigator screenOptions={{
            headerShown: false,
            stackPresentation: "modal"
        }}>
            <RootStack.Screen
                name="Main"
                component={MainStackScreen}
                options={{headerShown: false}}
            />
            <RootStack.Screen name="Login" component={AuthNavigator}/>
        </RootStack.Navigator>
    );
}