import {Dispatch, SetStateAction} from "react";
import {Notification, NotificationProperties} from "react-native-in-app-message";
import messaging from "@react-native-firebase/messaging";
import {NotificationSound} from "core/notification/notification.sound";
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    notification: {
        marginTop: 15
    },
});

export const DefaultNotificationProps: NotificationProperties = {
    autohide: true,
    duration: 15000,
    text: 'Test notification',
    hideStatusBar: false,
    style: styles.notification
}

export class NotificationListener {
    private readonly setNotification: Dispatch<SetStateAction<NotificationProperties>>;
    private refNotificationComponent: Notification;

    constructor(setNotification: Dispatch<SetStateAction<NotificationProperties>>, refNotificationComponent: Notification) {
        this.setNotification = setNotification;
        this.refNotificationComponent = refNotificationComponent;
    }

    public listen() {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            this.setNotification({
                ...DefaultNotificationProps,
            });
            NotificationSound.Default();
            this.refNotificationComponent?.show();
        });

        return unsubscribe;
    }
}
