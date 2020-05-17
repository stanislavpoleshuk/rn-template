import React from 'react';
import {BottomNavigationTab, Divider} from '@ui-kitten/components';
import {BrandBottomNavigation} from "../../core/components/common/brand-bottom-navigation.component";
import {SafeAreaLayout} from "../../core/components/layouts/safe-area-layout.component";
import {ColorPaletteIcon, LayoutIcon, StarOutlineIcon} from "../../core/components/common/icons";
import {localization} from "../../core/localization";


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
                onSelect={onSelect}>
                <BottomNavigationTab
                    title={localization.tabs.orders}
                    icon={StarOutlineIcon}
                />
                <BottomNavigationTab
                    title={localization.tabs.history}
                    icon={ColorPaletteIcon}
                />
                <BottomNavigationTab
                    title={localization.tabs.profile}
                    icon={LayoutIcon}
                />
            </BrandBottomNavigation>
        </SafeAreaLayout>
    );
};
