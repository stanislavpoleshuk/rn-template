import React from 'react';
import {BrandBottomNavigation} from "components/common/brand-bottom-navigation.component";
import {
    AssetBellIcon,
    AssetPersonIcon,
    AssetTrendingUpIcon,
    StarOutlineIcon
} from "../../resources/icons";
import {BottomNavigationTab, Divider} from "@ui-kitten/components";
import {SafeAreaView} from "react-native-safe-area-context";

export const HomeBottomNavigation = (props): React.ReactElement => {
    const onSelect = (index: number): void => {
        props.navigation.navigate(props.state.routeNames[index]);
    };

    return (
        <SafeAreaView
            edges={['bottom']}
        >
            <Divider/>
            <BrandBottomNavigation
                appearance='noIndicator'
                selectedIndex={props.state.index}
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
        </SafeAreaView>
    );
};