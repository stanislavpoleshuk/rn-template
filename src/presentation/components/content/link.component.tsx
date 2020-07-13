import React, {useCallback} from "react";
import {StyleSheet, TouchableWithoutFeedback, View, ViewStyle} from "react-native";
import {Text} from "@ui-kitten/components";

type Props = {
    text: string;
    onPress: () => void;
    styleContainer?: ViewStyle;
};

export const Link: React.FC<Props> =
    ({
         text, onPress, styleContainer
     }) => {
        const onPressPress = useCallback(() => onPress(), [onPress]);

        return (
            <View style={[styles.container, styleContainer]}>
                <TouchableWithoutFeedback>
                    <Text style={styles.text}>{text}</Text>
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