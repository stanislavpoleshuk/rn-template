import {Dispatch, SetStateAction} from "react";
import {Notification, NotificationProperties} from "react-native-in-app-message";
import messaging from "@react-native-firebase/messaging";


export const DefaultNotificationProps: NotificationProperties = {
    autohide: false,
    text: 'Test notification',
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
            })
            this.refNotificationComponent?.show();
        });

        return unsubscribe;
    }
}