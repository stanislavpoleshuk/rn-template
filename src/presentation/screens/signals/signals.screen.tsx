import React from "react";
import {StyleSheet} from "react-native";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {TopNavigationAction} from "@ui-kitten/components";
import {CommonStyle} from "core/theme/styles/common.styles";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {MenuIcon} from "resources/icons";
import {localization} from "localization/index";
import {SignalsContainer} from "screens/signals/signals.container";
import {NavigationAction} from "core/navigation/components/navigation-action.component";


export const SignalsScreen = (props): React.ReactElement => {

    const DrawerAction = () => (
        <NavigationAction
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