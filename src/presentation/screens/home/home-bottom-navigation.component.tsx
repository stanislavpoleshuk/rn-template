import React from 'react';
import {BrandBottomNavigation} from "components/common/brand-bottom-navigation.component";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {
    AssetBellIcon,
    AssetPersonIcon,
    AssetTrendingUpIcon,
    StarOutlineIcon
} from "../../resources/icons";
import {StyleSheet} from "react-native";
import {BottomNavigationTab, Divider} from "@ui-kitten/components";

export const HomeBottomNavigation = (props): React.ReactElement => {

    const onSelect = (index: number): void => {
        props.navigation.navigate(props.state.routeNames[index]);
    };


    return (
        <SafeAreaLayout insets='bottom'>
            <Divider/>
            <BrandBottomNavigation
                appearance='noIndicator'
                selectedIndex={props.state.index}
                // containerStyle={InsetsStyle('bottom-navigation')}
                onSelect={onSelect}>
                <BottomNavigationTab
                    icon={StarOutlineIcon}
                />
                <BottomNavigationTab
                    icon={AssetTrendingUpIcon}
                />
                <BottomNavigationTab
                    icon={AssetBellIcon}
                />
                <BottomNavigationTab
                    icon={AssetPersonIcon}
                />
            </BrandBottomNavigation>
        </SafeAreaLayout>
    );
};