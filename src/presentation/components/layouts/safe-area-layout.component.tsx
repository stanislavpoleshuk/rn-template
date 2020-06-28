import React from 'react';
import {FlexStyle, SafeAreaView, StyleSheet, View, ViewStyle} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from "react-native-safe-area-context";
import {TopNavigationAction} from "@ui-kitten/components";
import {MenuIcon} from "resources/icons";

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

export const SafeAreaLayout = ({children, insets}: Props): React.ReactElement => {
    console.log(insetsStyle(insets), 'insetsStyle(insets)')



    return (
        <SafeAreaView
            style={[styles.container, insetsStyle(insets)]}
        >
            {children}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    },
})