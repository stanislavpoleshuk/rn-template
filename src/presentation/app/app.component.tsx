import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppLoading, Task} from './app-loading.component';
import {SplashImage} from "components/common/splash-image.component";
import {AppNavigator} from "core/navigation/app.navigator";
import {ImageResources} from "resources/images/imageResources";
import {Host} from 'react-native-portalize';
import MapView from "react-native-yandex-mapkit";
import {YANDEX_MAP_KIT_KEY} from 'react-native-dotenv';
import {Mapping, Theme} from 'application/app/theme.service';
import {AppStorage} from "application/app/app-storage.service";
import {AppThemeComponent} from "./app-theme.component";
import {StatusBar} from "components/common/status-bar.component";

const loadingTasks: Task[] = [
    () => AppStorage.getMapping(defaultConfig.mapping).then(result => ['mapping', result]),
    () => AppStorage.getTheme(defaultConfig.theme).then(result => ['theme', result]),
];

const defaultConfig: { mapping: Mapping, theme: Theme } = {
    mapping: 'eva',
    theme: 'light',
};

const App = ({mapping, theme}): React.ReactElement => {
    return (
        <AppThemeComponent
            mapping={mapping}
            theme={theme}
        >
            <SafeAreaProvider>
                <StatusBar/>
                <Host>
                    <AppNavigator/>
                </Host>
            </SafeAreaProvider>
        </AppThemeComponent>
    );
};


const Splash = ({loading}: { loading: boolean }): React.ReactElement => (
    <SplashImage
        loading={loading}
        source={ImageResources.splash}
    />
);

export default (): React.ReactElement => (
    <AppLoading
        tasks={loadingTasks}
        initialConfig={defaultConfig}
        placeholder={Splash}>
        {props => <App {...props}/>}
    </AppLoading>
);

MapView.setApiKey(YANDEX_MAP_KIT_KEY);
