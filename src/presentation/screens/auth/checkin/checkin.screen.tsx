import React from "react";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {StyleSheet} from "react-native";
import {CommonStyle} from "core/theme/styles/common.styles";
import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {ArrowIosBackIcon, CloseIcon} from "resources/icons";
import {localization} from "localization/index";
import {AuthStackParamList} from "core/navigation/routes/auth.navigator";
import {CheckinContainer} from "./checkin.container";
import {NavigationAction} from "core/navigation/components/navigation-action.component";

type AuthScreenRouteProp = RouteProp<AuthStackParamList, 'Checkin'>;
type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Checkin'>;

type Props = {
    route: AuthScreenRouteProp;
    navigation: AuthScreenNavigationProp;
};

export const CheckinScreen = ({navigation}: Props): React.ReactElement => {

    const BackAction = (): React.ReactElement => (
        <NavigationAction
            icon={ArrowIosBackIcon}
            onPress={navigation.goBack}
        />
    );

    const onSubmit = () => {
        navigation.goBack();
    }

    const onSignInPress = () => {
        navigation.navigate('PhoneConfirm')
    }

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={"bottom"}
        >
            <HeaderNavigation
                title={localization.screens.checkin.title}
                accessoryLeft={BackAction}
            />
            <CheckinContainer
                onSubmit={onSubmit}
            />
        </SafeAreaLayout>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.safeArea
    }
})