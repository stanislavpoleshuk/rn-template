import React from "react";
import {StyleSheet, View} from "react-native";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {Text, TopNavigationAction} from "@ui-kitten/components";
import {CommonStyle} from "core/theme/styles/common.styles";
import {ContentArea} from "components/layouts/content-area.component";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {MenuIcon} from "resources/icons";
import {localization} from "localization/index";
import {SignalsContainer} from "screens/signals/signals.container";


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
            <SignalsContainer/>
        </SafeAreaLayout>
    );
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.safeArea
    }
})