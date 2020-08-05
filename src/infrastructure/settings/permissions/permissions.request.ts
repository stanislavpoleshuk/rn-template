import {PermissionsAndroid, Platform} from "react-native";

export class PermissionsRequest {
    public static async requestLocationPermission(): Promise<any>
    {
        try {
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Доступ до геолокации',
                            message: 'Необходим доступ до вашей текущей позиции',
                            buttonPositive: 'OK'
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                    } else {
                        return;
                    }
                } catch (err) {
                    return;
                }
            }
        } catch (err) {
            console.warn(err)
        }
    }
}