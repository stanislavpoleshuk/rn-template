import React from "react";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {TopNavigationAction} from "@ui-kitten/components";
import {HeaderNavigation} from "core/navigation/components/header-navigation.component";
import {StyleSheet} from "react-native";
import {CommonStyle} from "core/theme/styles/common.styles";
import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {ArrowIosBackIcon} from "resources/icons";
import {localization} from "localization/index";
import {AuthStackParamList} from "core/navigation/routes/auth.navigator";
import {RestorePasswordContainer} from "./restore-password.container";

type AuthScreenRouteProp = RouteProp<AuthStackParamList, 'RestorePassword'>;
type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'RestorePassword'>;

type Props = {
    route: AuthScreenRouteProp;
    navigation: AuthScreenNavigationProp;
};

export const RestorePasswordScreen = ({navigation}: Props): React.ReactElement => {

    const BackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={ArrowIosBackIcon}
            onPress={navigation.goBack}
        />
    );

    const onSubmit = () => {
        navigation.navigate('PhoneConfirm')
    }

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={"bottom"}
        >
            <HeaderNavigation
                title={localization.screens.restorePassword.title}
                accessoryLeft={BackAction}
            />
            <RestorePasswordContainer
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