import React from "react";
import {StyleSheet} from "react-native";
import {SafeAreaLayout} from "../../core/components/layouts/safe-area-layout.component";
import {Text} from "@ui-kitten/components";
import {CommonStyle} from "../../core/theme/styles/common.styles";
import {ContentArea} from "../../core/components/layouts/content-area.component";
import {HeaderNavigation} from "../../core/navigation/components/header-navigation.component";


export const HistoryScreen = (props): React.ReactElement => {

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={'top'}
        >
            <HeaderNavigation
                title={'История'}
            />
            <ContentArea>
                <Text>Profile</Text>
            </ContentArea>
        </SafeAreaLayout>
    );
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.lightSafeArea
    }
})