import React from "react";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {Text, TopNavigationAction} from "@ui-kitten/components";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import {CommonStyle} from "core/theme/styles/common.styles";
import {MenuIcon} from "resources/icons";
import {localization} from "localization/index";

export const ProfileScreen = (props): React.ReactElement => {
    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={'top'}
        >
            <HeaderNavigation
                title={localization.tabs.profile}
                subtitle={`Settings`}
            />
            <ContentArea>
                <Text>Мой профиль</Text>
            </ContentArea>
        </SafeAreaLayout>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.safeArea
    }
})