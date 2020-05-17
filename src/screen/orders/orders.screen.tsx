import React from "react";
import {SafeAreaLayout} from "../../core/components/layouts/safe-area-layout.component";
import {Text, TopNavigationAction} from "@ui-kitten/components";
import {HeaderNavigation} from "../../core/navigation/components/header-navigation.component";
import {ContentArea} from "../../core/components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import {CommonStyle} from "../../core/theme/styles/common.styles";
import {MenuIcon} from "../../core/components/common/icons";


export const OrdersScreen = (props): React.ReactElement => {

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
                title={'Мои заказы'}
                leftControl={renderDrawerAction()}
            />
            <ContentArea>
                <Text>Мои заказы</Text>
            </ContentArea>
        </SafeAreaLayout>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.lightSafeArea
    }
})