import React from 'react';
import {FlexStyle, StyleSheet, ViewStyle} from 'react-native';
import {ThemeContextValue, Theming} from "application/app/theme.service";
import {Colors} from "core/theme/colors.theme";
import {SafeAreaView} from 'react-native-safe-area-context';

type Inset = 'top' | 'right' | 'bottom' | 'left';

type Props = {
    children: React.ReactNode;
    style?: ViewStyle;
    insets?: Inset;
};

export const SafeAreaLayout = ({children, insets, style}: Props): React.ReactElement => {
    const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);

    const themes = {
        ...(
            themeContext.isDarkMode() ?
                styles.dark : styles.light
        )
    } as FlexStyle;

    return (
        <SafeAreaView
            edges={insets && [insets]}
            style={[themes, style]}
        >
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    light: {
        backgroundColor: Colors.light,
    },
    dark: {
        backgroundColor: Colors.dark
    }
})