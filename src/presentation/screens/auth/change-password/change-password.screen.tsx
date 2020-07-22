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
import {ChangePasswordContainer} from "./change-password.container";

type AuthScreenRouteProp = RouteProp<AuthStackParamList, 'ChangePassword'>;
type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'ChangePassword'>;

type Props = {
    route: AuthScreenRouteProp;
    navigation: AuthScreenNavigationProp;
};

export const ChangePasswordScreen = ({navigation}: Props): React.ReactElement => {

    const BackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={ArrowIosBackIcon}
            onPress={navigation.goBack}
        />
    );

    const onSubmit = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={"bottom"}
        >
            <HeaderNavigation
                title={localization.screens.auth.title}
                accessoryLeft={BackAction}
            />
            <ChangePasswordContainer
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