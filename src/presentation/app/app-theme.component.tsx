import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {appMappings, appThemes} from './app-theming';
import {AppIconsPack} from 'resources/icons/app-icons-pack';
import {AppearanceProvider} from "react-native-appearance";
import { Theming } from 'application/app/theme.service';


type Props = {
    children: React.ReactNode;
}

export const AppThemeComponent = ({mapping, theme, children}): React.ReactElement<Props> => {
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
                            {children}
                        </Theming.ThemeContext.Provider>
                    </Theming.MappingContext.Provider>
                </ApplicationProvider>
            </AppearanceProvider>
        </React.Fragment>
    );
};