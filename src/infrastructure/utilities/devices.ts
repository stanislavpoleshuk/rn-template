import { Dimensions, Platform } from 'react-native';

export class Devices {
    static isIphoneX() {
        const dim = Dimensions.get('window');
        return (
            Platform.OS === 'ios' &&
            (Devices.isIPhoneXSize(dim) || Devices.isIPhoneXrSize(dim))
        );
    }

    static isIPhoneXrSize(dim) {
        return dim.height == 896 || dim.width == 896;
    }

    static isIPhoneXSize(dim) {
        return dim.height == 812 || dim.width == 812;
    }

}