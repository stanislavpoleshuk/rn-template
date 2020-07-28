import messaging from "@react-native-firebase/messaging";


export class NotificationPermissions {
    public static async init() {
        await this.requestPermission();
    }

    private static async requestPermission() {
        const authorizationStatus = await messaging().requestPermission();
        if (authorizationStatus == messaging.AuthorizationStatus.AUTHORIZED) {
            await this.saveFcmToken();
        }
    }

    private static async saveFcmToken() {
        const token = await messaging().getToken();
        console.log('token: ', token);
    }
}