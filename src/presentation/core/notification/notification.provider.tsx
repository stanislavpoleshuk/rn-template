import React, {useEffect, useRef} from "react";
import {Notification, NotificationProperties} from "react-native-in-app-message";
import {NotificationPermissions} from "core/notification/notification.permissions";
import {NotificationListener} from "core/notification/notification.listener";

type Props = {
    children?: React.ReactNode;
}

export const NotificationProvider: React.FC<Props> =
    ({
         children
     }) => {
        const ref = useRef<Notification>(null);
        const [notification, setNotification] = React.useState<NotificationProperties>({});

        useEffect(() => {
            NotificationPermissions.init().then();
            const listener = new NotificationListener(setNotification, ref?.current);
            return listener.listen();
        }, []);

        return (
            <React.Fragment
            >
                {children}
                <Notification {...notification} ref={ref}/>
            </React.Fragment>
        )
    };