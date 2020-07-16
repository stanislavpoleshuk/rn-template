import React from "react";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {TopNavigationAction} from "@ui-kitten/components";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {StyleSheet} from "react-native";
import {CommonStyle} from "core/theme/styles/common.styles";
import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {CloseIcon} from "resources/icons";
import {localization} from "localization/index";
import {AuthStackParamList} from "core/navigation/routes/auth.navigator";
import {CheckinContainer} from "./Checkin.container";

type AuthScreenRouteProp = RouteProp<AuthStackParamList, 'Checkin'>;
type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Checkin'>;

type Props = {
    route: AuthScreenRouteProp;
    navigation: AuthScreenNavigationProp;
};

export const CheckinScreen = ({navigation}: Props): React.ReactElement => {

    const CloseAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={CloseIcon}
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
            insets={"top"}
        >
            <HeaderNavigation
                title={localization.screens.checkin.title}
                accessoryRight={CloseAction}
            />
            <CheckinContainer
                onSubmit={onSubmit}
                onSignInPress={onSignInPress}
            />
        </SafeAreaLayout>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.safeArea
    }
})