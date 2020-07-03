import {ContentArea} from "components/layouts/content-area.component";
import {Text} from "@ui-kitten/components";
import {StyleSheet} from "react-native";
import React from "react";
import {Logo} from "components/ui/logo/logo.component";

type Props = {}

export const AuthContainer = (props: Props): React.ReactElement => {

    return (
        <ContentArea style={styles.content}>
            <Text>Мои заказы</Text>

            <Logo
            />
        </ContentArea>
    )
}


const styles = StyleSheet.create({
    content: {
        // flex: 1
    },
})