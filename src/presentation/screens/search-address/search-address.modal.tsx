import React from "react";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {Text, TopNavigationAction} from "@ui-kitten/components";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import {CommonStyle} from "core/theme/styles/common.styles";
import {MenuIcon} from "resources/icons";
import {SearchAddressContainer} from "screens/search-address/search-address.container";



export const SearchAddressModal = (props): React.ReactElement => {
    return (
       <SearchAddressContainer/>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.safeArea
    }
})