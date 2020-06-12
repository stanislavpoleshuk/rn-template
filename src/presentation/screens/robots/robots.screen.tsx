import React from "react";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {Text, TopNavigationAction} from "@ui-kitten/components";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import {CommonStyle} from "core/theme/styles/common.styles";
import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RobotsStackParamList} from "core/navigation/routes/search-robots.navigation";
import {DrawerActionProps} from "core/navigation/types/navigation-props";
import {localization} from "core/../../../infrastructure/localization";
import {AssetPlusIcon, MenuIcon} from "resources/icons";

type RobotsScreenRouteProp = RouteProp<RobotsStackParamList, 'Robots'>;
type RobotsScreenNavigationProp = StackNavigationProp<
    RobotsStackParamList,
    'Robots'
    >;

type Props = {
    route: RobotsScreenRouteProp;
    navigation: RobotsScreenNavigationProp & DrawerActionProps;
};

export const RobotsScreen = (props: Props): React.ReactElement => {

    const renderDrawerAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={MenuIcon}
            onPress={props.navigation.toggleDrawer}
        />
    );

    const renderAddRobotAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={AssetPlusIcon}
            onPress={() => props.navigation.navigate("SearchRobots")}
        />
    );

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={'top'}
        >
            <HeaderNavigation
                title={localization.tabs.robots}
                subtitle={'Automated Trading'}
                leftControl={renderDrawerAction()}
                rightControls={renderAddRobotAction()}
            />
            <ContentArea>
                <Text>Мои заказы</Text>
            </ContentArea>
        </SafeAreaLayout>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.safeArea
    }
})