import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppLoading, Task} from './app-loading.component';
import {AppNavigator} from "core/navigation/app.navigator";
import {YANDEX_MAP_KIT_KEY, MAPBOX_KEY} from 'react-native-dotenv';
import {Mapping, Theme} from 'application/app/theme.service';
import {AppStorage} from "application/app/app-storage.service";
import {AppThemeComponent} from "./app-theme.component";
import {StatusBar} from "components/common/status-bar.component";
import {NotificationProvider} from "core/notification/notification.provider";
import MapboxGL from "@react-native-mapbox-gl/maps";
import {StoreProvider} from "core/provider/store.provider";

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
            <StoreProvider>
                <NotificationProvider>
                    <SafeAreaProvider>
                        <StatusBar/>
                        <AppNavigator/>
                    </SafeAreaProvider>
                </NotificationProvider>
            </StoreProvider>
        </AppThemeComponent>
    );
};


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

MapboxGL.setAccessToken(MAPBOX_KEY);
