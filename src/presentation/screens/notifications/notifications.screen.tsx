import React from "react";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {Text} from "@ui-kitten/components";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import {CommonStyle} from "core/theme/styles/common.styles";


export const NotificationsScreen = (props): React.ReactElement => {

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={'top'}
        >
            <HeaderNavigation
                title={`Notifications`}
            />
            <ContentArea>
                <Text>Что нового</Text>
            </ContentArea>
        </SafeAreaLayout>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.safeArea
    }
})