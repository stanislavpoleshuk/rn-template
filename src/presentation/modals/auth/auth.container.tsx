import {ContentArea} from "components/layouts/content-area.component";
import {Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import React, {useCallback} from "react";
import {AuthForm, AuthFormProps} from "./auth.form";
import {localization} from "localization/index";
import {Link} from "components/content/link.component";

type ComponentProps = {
    onSignUpPress: () => void;
}

type Props = AuthFormProps & ComponentProps

export const AuthContainer: React.FC<Props> =
    ({
         onSubmit, onForgotPress, onSignUpPress
     }) => {
        const onSignUpCallback = useCallback(() => onSignUpPress(), [onSignUpPress]);

        const SignUpFooter = (): React.ReactElement | null => {
            return (
                <View style={styles.footer}>
                    <Text appearance={'hint'}>{localization.auth.noAccount}</Text>
                    <Link
                        styleContainer={styles.signUpLink}
                        text={localization.auth.signUpLink}
                        onPress={onSignUpCallback}
                    />
                </View>
            )
        }

        return (
            <ContentArea>
                <AuthForm
                    onSubmit={onSubmit}
                    onForgotPress={onForgotPress}
                />
                <SignUpFooter
                />
            </ContentArea>
        )
    }


const styles = StyleSheet.create({
    footer: {
        alignContent: 'center',
        justifyContent: "center",
        flexDirection: "row",
    },
    signUpLink: {
        paddingLeft: 6
    }
})