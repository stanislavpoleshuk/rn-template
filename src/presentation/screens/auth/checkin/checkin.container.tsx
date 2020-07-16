import {ContentArea} from "components/layouts/content-area.component";
import {Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import React, {useCallback} from "react";
import {CheckinForm, CheckinFormProps} from "./checkin.form";
import {localization} from "localization/index";
import {Link} from "components/content/link.component";

type ComponentProps = {
    onSignInPress: () => void;
}

type Props = CheckinFormProps & ComponentProps

export const CheckinContainer: React.FC<Props> =
    ({
         onSubmit, onSignInPress
     }) => {
        const onSignUpCallback = useCallback(() => onSignInPress(), [onSignInPress]);

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
                <CheckinForm
                    onSubmit={onSubmit}
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