import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './routes/home.navigator';
import {ThemeContextValue, Theming} from "application/app/theme.service";
import _ from "lodash";
import {Colors} from "core/theme/colors.theme";
import {Host} from "react-native-portalize";


const getTheme = _.memoize((isDarkMode: boolean) => {
    const navigatorTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: isDarkMode ? Colors.darkBar : Colors.lightBar,
        },
    };
    return navigatorTheme;
});


export const AppNavigator = (): React.ReactElement => {
    const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);
    return (
        <NavigationContainer theme={getTheme(themeContext.isDarkMode())}>
            <Host>
                <HomeNavigator/>
            </Host>
        </NavigationContainer>
    )
};