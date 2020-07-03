import React from "react";
import {Image, ImageStyle, StyleProp, StyleSheet} from "react-native";
import {ImageResources} from "resources/images/imageResources";

type Props = {
    style?: StyleProp<ImageStyle>;
}

export const Logo = ({style}: Props): React.ReactElement => {
    return (
        <Image
            style={[styles.container, style]}
            source={ImageResources.logo}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100
    },
})