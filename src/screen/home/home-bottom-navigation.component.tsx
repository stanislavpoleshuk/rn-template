import React from 'react';
import { BottomNavigationTab, Divider } from '@ui-kitten/components';
import {BrandBottomNavigation} from "../../core/components/common/brand-bottom-navigation.component";
import {SafeAreaLayout} from "../../core/components/common/safe-area-layout.component";
import {ColorPaletteIcon, LayoutIcon, StarOutlineIcon} from "../../core/components/common/icons";


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
          title='Profile'
          icon={LayoutIcon}
        />
        <BottomNavigationTab
          title='MyOrders'
          icon={StarOutlineIcon}
        />
        <BottomNavigationTab
          title='History'
          icon={ColorPaletteIcon}
        />
      </BrandBottomNavigation>
    </SafeAreaLayout>
  );
};
