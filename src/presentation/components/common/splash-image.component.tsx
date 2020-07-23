import React, {useEffect} from 'react';
import { ImageProps} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export interface LoadingAnimationProps extends ImageProps {
    loading: boolean;
}

export const SplashImage: React.FC<LoadingAnimationProps> =
    ({
         loading
     }) => {
        useEffect(() => {
            if (!loading) {
                setTimeout(()=>SplashScreen.hide(), 1000);
            }
        }, [loading]);

        return null;
    };