import React, {useEffect} from "react";
import {Alert} from "react-native";
import messaging from '@react-native-firebase/messaging';

type Props = {
    children?: React.ReactNode;
}

export const NotificationProvider: React.FC<Props> =
    ({
         children
     }) => {
    
        messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });

        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
        });


        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        )
    };