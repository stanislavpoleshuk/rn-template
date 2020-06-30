import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './routes/home.navigator';
import {ThemeContextValue, Theming} from "services/theme.service";


const navigatorTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

export const AppNavigator = (): React.ReactElement => {
    const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);

    return (
        <NavigationContainer theme={navigatorTheme}>
            <HomeNavigator/>
        </NavigationContainer>
    )
};
