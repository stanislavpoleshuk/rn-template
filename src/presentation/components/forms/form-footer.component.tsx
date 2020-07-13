import React from "react";
import {StyleSheet, View} from "react-native";


type Props = {
    children: React.ReactNode;
}

export const FormFooter: React.FC<Props> =
    ({
         children
     }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16
    },
})