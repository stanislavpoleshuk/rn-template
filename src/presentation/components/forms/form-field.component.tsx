import React from "react";
import {StyleSheet, View, ViewStyle} from "react-native";

export type FormFieldProps = {
    children: React.ReactNode;
    style?: ViewStyle;
}

type Props = FormFieldProps;

export const FormField: React.FC<Props> =
    ({
         children, style
     }) => {
        return (
            <View style={[styles.container, style]}>
                {children}
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5
    },
})