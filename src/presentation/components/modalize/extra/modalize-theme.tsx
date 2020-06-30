import {ThemeContextValue, Theming} from "services/theme.service";
import React from "react";
import {StyleSheet} from "react-native";
import {Colors} from "core/theme/colors.theme";


export class ModalizeTheme {
    static getModalStyle() {
        const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);
        return {
            ...styles.modal,
            ...(
                themeContext.isDarkMode() ?
                    styles.dark : styles.light
            )
        };
    }
}

const styles = StyleSheet.create({
    modal: {},
    light: {
        backgroundColor: Colors.light
    },
    dark: {
        backgroundColor: Colors.dark
    }
})