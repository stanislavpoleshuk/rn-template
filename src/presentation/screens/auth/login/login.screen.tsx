import React from "react";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {StyleSheet} from "react-native";
import {CommonStyle} from "core/theme/styles/common.styles";
import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {CloseIcon} from "resources/icons";
import {localization} from "localization/index";
import {AuthStackParamList} from "core/navigation/routes/auth.navigator";
import {LoginContainer} from "./login.container";
import {NavigationAction} from "core/navigation/components/navigation-action.component";

type AuthScreenRouteProp = RouteProp<AuthStackParamList, 'Login'>;
type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;

type Props = {
    route: AuthScreenRouteProp;
    navigation: AuthScreenNavigationProp;
};

export const LoginScreen = ({navigation}: Props): React.ReactElement => {

    const CloseAction = (): React.ReactElement => (
        <NavigationAction
            icon={CloseIcon}
            onPress={navigation.goBack}
        />
    );

    const onSubmit = () => {
        navigation.goBack();
    }

    const onForgotPress = () => {
        navigation.navigate('RestorePassword');
    }

    const onSignUpPress = () => {
        navigation.navigate('Checkin');
    }

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={"bottom"}
        >
            <HeaderNavigation
                title={localization.screens.auth.title}
                accessoryRight={CloseAction}
            />
            <LoginContainer
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