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
import {AuthContainer} from "./auth.container";

type AuthScreenRouteProp = RouteProp<AuthStackParamList, 'Auth'>;
type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList,
    'Auth'>;

type Props = {
    route: AuthScreenRouteProp;
    navigation: AuthScreenNavigationProp;
};

export const AuthModal = ({navigation}: Props): React.ReactElement => {

    const CloseAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={CloseIcon}
            onPress={navigation.goBack}
        />
    );

    const onSubmit = () => {
        navigation.goBack();
    }

    const onForgotPress = () => {

    }

    const onSignUpPress = () => {

    }

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={"top"}
        >
            <HeaderNavigation
                title={localization.screens.auth.title}
                accessoryRight={CloseAction}
            />
            <AuthContainer
                onSubmit={onSubmit}
                onForgotPress={onForgotPress}
                onSignUpPress={onSignUpPress}
            />
        </SafeAreaLayout>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.safeArea
    }
})