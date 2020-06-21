import React from "react";
import {Text} from "@ui-kitten/components";
import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet, View} from "react-native";

type Props = {};

export class RobotsContainer extends React.Component<Props> {
    render(): React.ReactElement {
        return (
            <ContentArea style={styles.content}>
                <Text>Мои заказы</Text>

            </ContentArea>
        )
    }
}


const styles = StyleSheet.create({
    content: {
        flex: 1
    },
})