import React from "react";
import {SafeAreaLayout} from "../../components/layouts/safe-area-layout.component";
import {Text, TopNavigationAction} from "@ui-kitten/components";
import {HeaderNavigation} from "../../core/navigation/components/header-navigation.component";
import {ContentArea} from "../../components/layouts/content-area.component";
import {StyleSheet, View} from "react-native";
import {CommonStyle} from "../../core/theme/styles/common.styles";
import {MenuIcon} from "../../resources/icons";

export const ProfileScreen = (props): React.ReactElement => {

    const renderDrawerAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={MenuIcon}
            onPress={props.navigation.toggleDrawer}
        />
    );

    const notifications = (): React.ReactElement => (
        <View>
            <Text>
                1
            </Text>
        </View>
    )

    return (
    <SafeAreaLayout
        style={styles.safeArea}
        insets={'top'}
    >
        <HeaderNavigation
            title={'Мой профиль'}
            leftControl={renderDrawerAction()}
            rightControls={notifications()}
        />
        <ContentArea>
            <Text>Мой профиль</Text>
        </ContentArea>
    </SafeAreaLayout>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.lightSafeArea
    }
})