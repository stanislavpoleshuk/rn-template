import React from "react";
import {TabProps} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";


type Props = {
    children?: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>
}

export const Form: React.FC<Props> =
    ({
         children
     }) => {

        return (
            <View
                style={styles.container}
            >
                {children}
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})