import React from "react";
import {StyleSheet, View} from "react-native";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {Text, TopNavigationAction} from "@ui-kitten/components";
import {CommonStyle} from "core/theme/styles/common.styles";
import {ContentArea} from "components/layouts/content-area.component";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {MenuIcon} from "resources/icons";
import {localization} from "core/../../../infrastructure/localization";


export const SignalsScreen = (props): React.ReactElement => {
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
                title={localization.tabs.signals}
                subtitle={`Manual Trading`}
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
        ...CommonStyle.safeArea
    }
})