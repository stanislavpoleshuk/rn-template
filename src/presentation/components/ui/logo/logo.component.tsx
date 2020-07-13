import React from "react";
import {Image, ImageStyle, StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import {ImageResources} from "resources/images/imageResources";

type Props = {
    style?: StyleProp<ImageStyle>;
    styleContainer?: ViewStyle;
}

export const Logo: React.FC<Props> =
    ({
         style, styleContainer
     }) => {
        return (
            <View style={styleContainer}>
                <Image
                    style={[styles.image, style]}
                    source={ImageResources.logo}
                />
            </View>
        )
    }

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
})