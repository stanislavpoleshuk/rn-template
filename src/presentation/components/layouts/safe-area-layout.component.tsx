import React from 'react';
import {FlexStyle, SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {ThemeContextValue, Theming} from "services/theme.service";
import {Colors} from "core/theme/colors.theme";

type Inset = 'top' | 'bottom';

type Props = {
    children: React.ReactNode;
    style?: ViewStyle;
    insets?: Inset;
};

const insetsStyle = (insets?: Inset) => {
    const INSETS = useSafeAreaInsets();
    if (!insets) return {}
    switch (insets) {
        case "top":
            return {
                paddingTop: INSETS.top,
            }
        case "bottom":
            return {
                paddingBottom: INSETS.bottom,
            }
    }
}

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
            style={[insetsStyle(insets), themes, style]}
        >
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    light: {
        backgroundColor: Colors.light
    },
    dark: {
        backgroundColor: Colors.dark
    }
})