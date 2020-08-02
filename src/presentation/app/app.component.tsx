import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppLoading, Task} from './app-loading.component';
import {AppNavigator} from "core/navigation/app.navigator";
import {Host} from 'react-native-portalize';
import MapView from "react-native-yandex-mapkit";
import {YANDEX_MAP_KIT_KEY, MAPBOX_KEY} from 'react-native-dotenv';
import {Mapping, Theme} from 'application/app/theme.service';
import {AppStorage} from "application/app/app-storage.service";
import {AppThemeComponent} from "./app-theme.component";
import {StatusBar} from "components/common/status-bar.component";
import {NotificationProvider} from "core/notification/notification.provider";
import MapboxGL from "@react-native-mapbox-gl/maps";

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
            <NotificationProvider>
                <SafeAreaProvider>
                    <StatusBar/>
                    <Host>
                        <AppNavigator/>
                    </Host>
                </SafeAreaProvider>
            </NotificationProvider>
        </AppThemeComponent>
    );
};


// const Splash = ({loading}: { loading: boolean }): React.ReactElement => (
//     <SplashImage
//         loading={loading}
//         source={ImageResources.splash}
//     />
// );


export default (): React.ReactElement => {
    return (
        <>
            <AppLoading
                tasks={loadingTasks}
                initialConfig={defaultConfig}
            >
                {props => <App {...props}/>}
            </AppLoading>
        </>
    );

}

MapView.setApiKey(YANDEX_MAP_KIT_KEY);

MapboxGL.setAccessToken(MAPBOX_KEY);
