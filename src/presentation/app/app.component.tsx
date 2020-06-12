import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppLoading, Task} from './app-loading.component';
import {appMappings, appThemes} from './app-theming';
import {AppIconsPack} from './app-icons-pack';
import {AppStorage} from "services/app-storage.service";
import {Mapping, Theme, Theming} from "services/theme.service";
import {StatusBar} from "react-native";
import {SplashImage} from "components/common/splash-image.component";
import {AppearanceProvider} from "react-native-appearance";
import {AppNavigator} from "core/navigation/app.navigator";
import {ImageResources} from "resources/images/imageResources";


const loadingTasks: Task[] = [
    () => AppStorage.getMapping(defaultConfig.mapping).then(result => ['mapping', result]),
    () => AppStorage.getTheme(defaultConfig.theme).then(result => ['theme', result]),
];

const defaultConfig: { mapping: Mapping, theme: Theme } = {
    mapping: 'eva',
    theme: 'dark',
};

// @ts-ignore
const App = ({mapping, theme}): React.ReactElement => {
    // @ts-ignore
    const [mappingContext, currentMapping] = Theming.useMapping(appMappings, mapping);
    // @ts-ignore
    const [themeContext, currentTheme] = Theming.useTheming(appThemes, mapping, theme);

    return (
        <React.Fragment>
            <IconRegistry icons={[EvaIconsPack, AppIconsPack]}/>
            <AppearanceProvider>
                <ApplicationProvider {...currentMapping} theme={currentTheme}>
                    <Theming.MappingContext.Provider value={mappingContext}>
                        <Theming.ThemeContext.Provider value={themeContext}>
                            <SafeAreaProvider>
                                <StatusBar/>
                                <AppNavigator/>
                            </SafeAreaProvider>
                        </Theming.ThemeContext.Provider>
                    </Theming.MappingContext.Provider>
                </ApplicationProvider>
            </AppearanceProvider>
        </React.Fragment>
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

