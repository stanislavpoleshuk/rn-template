import React from 'react';
import { ImageProps} from 'react-native';
import SplashScreen from "react-native-splash-screen";

export interface LoadingAnimationProps extends ImageProps {
    loading: boolean;
}

export const SplashImage = (props: LoadingAnimationProps): React.ReactElement | null => {
    if (!props.loading) {
        SplashScreen.hide();
    }
    return null;
};
