import React from "react";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {TopNavigationAction} from "@ui-kitten/components";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import {CommonStyle} from "core/theme/styles/common.styles";
import {ArrowIosBackIcon} from "resources/icons";
import {localization} from "core/../../../../infrastructure/localization";
import {RouteProp} from "@react-navigation/native";
import {RobotsStackParamList} from "core/navigation/routes/search-robots.navigation";
import {StackNavigationProp} from "@react-navigation/stack";
import {DrawerActionProps} from "core/navigation/types/navigation-props";
import {SearchRobotsContainer} from "screens/robots/search/searchRobots.container";


type SearchRobotsScreenRouteProp = RouteProp<RobotsStackParamList, 'SearchRobots'>;
type SearchRobotsScreenNavigationProp = StackNavigationProp<
    RobotsStackParamList,
    'SearchRobots'
    >;

type Props = {
    route: SearchRobotsScreenRouteProp;
    navigation: SearchRobotsScreenNavigationProp & DrawerActionProps;
};

export const SearchRobotsScreen = (props: Props): React.ReactElement => {

    const renderDrawerAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={ArrowIosBackIcon}
            onPress={props.navigation.goBack}
        />
    );

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={'top'}
        >
            <HeaderNavigation
                title={localization.pages.searchRobots}
                leftControl={renderDrawerAction()}
            />
            <ContentArea>
                <SearchRobotsContainer
                    displayType={'robots'}
                />
            </ContentArea>
        </SafeAreaLayout>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.safeArea
    }
})