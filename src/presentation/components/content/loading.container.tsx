import React from "react";
import {StyleSheet, View} from "react-native";
import {Spinner} from "@ui-kitten/components";

type Props = {
};


export const LoadingContainer: React.FC<Props> = ({}) =>{
    return (
        <View style={styles.container}>
            <Spinner/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})