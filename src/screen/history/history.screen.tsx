import React from "react";
import {StyleSheet} from "react-native";
import {SafeAreaLayout} from "../../core/components/layouts/safe-area-layout.component";
import {Text, TopNavigationAction} from "@ui-kitten/components";
import {CommonStyle} from "../../core/theme/styles/common.styles";
import {ContentArea} from "../../core/components/layouts/content-area.component";
import {HeaderNavigation} from "../../core/navigation/components/header-navigation.component";
import {MenuIcon} from "../../core/components/common/icons";


export const HistoryScreen = (props): React.ReactElement => {
    const renderDrawerAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={MenuIcon}
            onPress={props.navigation.toggleDrawer}
        />
    );

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={'top'}
        >
            <HeaderNavigation
                title={'История'}
                leftControl={renderDrawerAction()}
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