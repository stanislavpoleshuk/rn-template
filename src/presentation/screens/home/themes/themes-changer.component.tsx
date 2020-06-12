import {StyleService, useStyleSheet} from "@ui-kitten/components";
import React, {useState} from "react";
import {ListRenderItemInfo, TouchableOpacity} from "react-native";
import {AssetMonIcon} from "resources/icons";
import {appThemes} from "../../../app/app-theming";
import {MappingContextValue, ThemeContextValue, Theming} from "services/theme.service";
import {ThemeItem} from "screens/home/themes/type";
import {ThemesService} from "screens/home/themes/themes.service";

export const ThemesChanger = (): React.ReactElement => {
    //const [selectedTheme, changeSelectedState] = useState(false);
    const styles = useStyleSheet(themedStyles);
    const mappingContext: MappingContextValue = React.useContext(Theming.MappingContext);
    const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);

    const themes: ThemeItem[] = ThemesService.createThemeListItems(
        appThemes,
        mappingContext.currentMapping,
    );

    console.log(themeContext, themes, 'themeContext')


    const onItemPress = (): void => {
        const info = themes.find(x => x.name != themeContext.currentTheme)
        if (!info)
            return;
        themeContext.setCurrentTheme(info.name);
    };


    return (
        <React.Fragment>
            <TouchableOpacity activeOpacity={0.8} onPress={onItemPress}>
                {AssetMonIcon(styles.moonIcon)}
            </TouchableOpacity>
        </React.Fragment>
    )
}


const themedStyles = StyleService.create({
    moonIcon: {
        width: 20,
        height: 20,
        tintColor: 'color-basic-500'
    }
})