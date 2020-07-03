import React from 'react';
import {BrandBottomNavigation} from "components/common/brand-bottom-navigation.component";
import {InsetsStyle, SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {
    AssetBellIcon,
    AssetPersonIcon,
    AssetTrendingUpIcon,
    StarOutlineIcon
} from "../../resources/icons";
import {StyleSheet} from "react-native";
import {Colors} from "core/theme/colors.theme";
import {BottomNavigationTab, Divider} from "@ui-kitten/components";

export const HomeBottomNavigation = (props): React.ReactElement => {

    const onSelect = (index: number): void => {
        props.navigation.navigate(props.state.routeNames[index]);
    };


    return (
        <React.Fragment>
            <Divider/>
            <BrandBottomNavigation
                appearance='noIndicator'
                selectedIndex={props.state.index}
                containerStyle={InsetsStyle('bottom-outside')}
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
        </React.Fragment>
    );
};


const styles = StyleSheet.create({
    bottomNavigation: {
    },
})