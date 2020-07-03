import React from 'react';
import { ImageProps} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export interface LoadingAnimationProps extends ImageProps {
    loading: boolean;
}

export class SplashImage extends React.Component<LoadingAnimationProps> {
    constructor(props: LoadingAnimationProps) {
        super(props);
    }

    render(): React.ReactElement | null {
        if (!this.props.loading) {
            SplashScreen.hide();
        }
        return null;
    }
}
