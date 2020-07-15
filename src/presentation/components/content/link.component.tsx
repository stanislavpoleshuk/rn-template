import React, {useCallback} from "react";
import {StyleSheet, TouchableWithoutFeedback, View, ViewStyle} from "react-native";
import {Text} from "@ui-kitten/components";
import {TextProps} from "@ui-kitten/components/ui/text/text.component";

type ComponentProps = {
    text: string;
    onPress: () => void;
    styleContainer?: ViewStyle;
};

type Props = TextProps & ComponentProps;

export const Link: React.FC<Props> =
    ({
         text, onPress, styleContainer, style, ...restProps
     }) => {
        const onPressPress = useCallback(() => onPress(), [onPress]);

        return (
            <View style={[styles.container, styleContainer]}>
                <TouchableWithoutFeedback onPress={onPressPress}>
                    <Text {...restProps} style={[style, styles.text]}>{text}</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {},
    text: {
        textDecorationLine: "underline"
    }
})