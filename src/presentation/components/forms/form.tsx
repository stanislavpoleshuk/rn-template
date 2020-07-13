import React from "react";
import {TabProps} from "@ui-kitten/components";
import {ScrollView, StyleSheet} from "react-native";


type Props = {
    children?: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>
}

export const Form: React.FC<Props> =
    ({
         children
     }) => {
        return (
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}
                keyboardShouldPersistTaps='handled'
            >
                {children}
            </ScrollView>
        )
    }

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1
    },
})