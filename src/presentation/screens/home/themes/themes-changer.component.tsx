import {StyleService, useStyleSheet} from "@ui-kitten/components";
import React from "react";
import {TouchableOpacity} from "react-native";
import {AssetMonIcon} from "resources/icons";
import {appThemes} from "../../../app/app-theming";
import {MappingContextValue, ThemeContextValue, Theming} from "services/theme.service";
import {ThemeItem} from "screens/home/themes/type";
import {ThemesService} from "screens/home/themes/themes.service";

export const ThemesChanger = (): React.ReactElement => {
    const styles = useStyleSheet(themedStyles);
    const mappingContext: MappingContextValue = React.useContext(Theming.MappingContext);
    const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);

    const themes: ThemeItem[] = ThemesService.createThemeListItems(
        appThemes,
        mappingContext.currentMapping,
    );

    const onItemPress = (): void => {
        const info = themes.find(x => x.name != themeContext.currentTheme)
        if (!info)
            return;
        themeContext.setCurrentTheme(info.name);
    };

    return (
            <TouchableOpacity activeOpacity={0.8} onPress={onItemPress}>
                {AssetMonIcon(styles.moonIcon)}
            </TouchableOpacity>
     )
}


const themedStyles = StyleService.create({
    moonIcon: {
        width: 22,
        height: 22,
        tintColor: 'color-basic-500'
    }
})