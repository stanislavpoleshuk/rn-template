import React from 'react';
import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeBottomNavigation} from "screens/home/home-bottom-navigation.component";
import {HomeDrawer} from "screens/home/home-drawer.component";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {RobotsScreen} from "screens/robots/robots.screen";
import {SignalsScreen} from "screens/signals/signals.screen";
import {NotificationsScreen} from "screens/notifications/notifications.screen";
import {ProfileScreen} from "screens/profile/profile.screen";
import {AuthNavigator} from "core/navigation/routes/auth.navigator";
import {Platform} from "react-native";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();


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
        <MainStack.Navigator headerMode={'none'}>
            <MainStack.Screen name="Home" component={HomeDrawerNavigator}/>
        </MainStack.Navigator>
    );
}

const modalOptions = {
    ...(Platform.OS === 'ios' && {
        ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
        cardOverlayEnabled: true,
    })
}

export const HomeNavigator = (): React.ReactElement => {
    return (
        <RootStack.Navigator headerMode={'none'} mode="modal" screenOptions={modalOptions}>
            <RootStack.Screen
                name="Main"
                component={MainStackScreen}
                options={{headerShown: false}}
            />
            <RootStack.Screen name="Login" component={AuthNavigator}/>
        </RootStack.Navigator>
    );
}