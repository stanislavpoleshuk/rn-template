import React from "react";
import {StyleSheet, View} from "react-native";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {Text, TopNavigationAction} from "@ui-kitten/components";
import {CommonStyle} from "core/theme/styles/common.styles";
import {ContentArea} from "components/layouts/content-area.component";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {AssetPlusIcon, MenuIcon} from "resources/icons";
import {localization} from "localization/index";
import {SignalsContainer} from "screens/signals/signals.container";


export const SignalsScreen = (props): React.ReactElement => {

    const DrawerAction = () => (
        <TopNavigationAction
            icon={MenuIcon}
            onPress={props.navigation.toggleDrawer}
        />
    );


    return (
        <SafeAreaLayout
            insets={'top'}
            style={styles.safeArea}
        >
            <HeaderNavigation
                title={localization.tabs.signals}
                subtitle={`Manual Trading`}
                accessoryLeft={DrawerAction}
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