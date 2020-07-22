import React from "react";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {TopNavigationAction} from "@ui-kitten/components";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {StyleSheet} from "react-native";
import {CommonStyle} from "core/theme/styles/common.styles";
import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RobotsStackParamList} from "core/navigation/routes/robots.navigation";
import {DrawerActionProps} from "core/navigation/types/navigation-props";
import {AssetPlusIcon, MenuIcon} from "resources/icons";
import {RobotsContainer} from "screens/robots/robots.container";
import {localization} from "localization/index";

type RobotsScreenRouteProp = RouteProp<RobotsStackParamList, 'Robots'>;
type RobotsScreenNavigationProp = StackNavigationProp<RobotsStackParamList,
    'Robots'>;

type Props = {
    route: RobotsScreenRouteProp;
    navigation: RobotsScreenNavigationProp & DrawerActionProps;
};

export const RobotsScreen = (props: Props): React.ReactElement => {

    const DrawerAction = () => (
        <TopNavigationAction
            icon={MenuIcon}
            onPress={props.navigation.toggleDrawer}
        />
    );


    const AddRobotAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={AssetPlusIcon}
            onPress={() => props.navigation.navigate("Login")}
        />
    );


    return (
        <SafeAreaLayout
            style={styles.safeArea}
        >
            <HeaderNavigation
                title={localization.tabs.robots}
                subtitle={'Automated Trading'}
                accessoryLeft={DrawerAction}
                accessoryRight={AddRobotAction}
            />
            <RobotsContainer
            />
        </SafeAreaLayout>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.safeArea
    }
})