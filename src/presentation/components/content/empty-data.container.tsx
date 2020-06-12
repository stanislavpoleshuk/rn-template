import React from "react";
import {StyleSheet, View} from "react-native";
import {LoadingContainer} from "components/content/loading.container";
import {Text} from "@ui-kitten/components";

type Props = {
    loading: boolean;
    message: string;
};

export const EmptyData: React.FC<Props> = ({loading, message}) =>{

    const MessageContainer = (): React.ReactElement => (
        <View style={styles.messageContainer}>
            <Text>{message}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {
                loading ?
                    <LoadingContainer/>
                    : <MessageContainer/>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    },
    messageContainer: {

    },
    text: {

    }
})
