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
import {PhoneConfirmContainer} from "./phone-confirm.container";

type AuthScreenRouteProp = RouteProp<AuthStackParamList, 'PhoneConfirm'>;
type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList,
    'PhoneConfirm'>;

type Props = {
    route: AuthScreenRouteProp;
    navigation: AuthScreenNavigationProp;
};

export const PhoneConfirmScreen = ({navigation}: Props): React.ReactElement => {


    const BackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={ArrowIosBackIcon}
            onPress={navigation.goBack}
        />
    );

    const onSubmit = () => {
        navigation.goBack();
    }

    const onResendCode = () => {
    }

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={"top"}
        >
            <HeaderNavigation
                title={localization.screens.confirmCode.title}
                accessoryLeft={BackAction}
            />
            <PhoneConfirmContainer
                onSubmit={onSubmit}
                onResendCode={onResendCode}
            />
        </SafeAreaLayout>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        ...CommonStyle.safeArea
    }
})