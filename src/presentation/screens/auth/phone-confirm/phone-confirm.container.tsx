import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import React from "react";
import {PhoneConfirmForm, PhoneConfirmFormProps} from "./phone-confirm.form";

type ComponentProps = {}

type Props = PhoneConfirmFormProps & ComponentProps

export const PhoneConfirmContainer: React.FC<Props> =
    ({
         onSubmit, onResendCode
     }) => {
        return (
            <ContentArea>
                <PhoneConfirmForm
                    onSubmit={onSubmit}
                    onResendCode={onResendCode}
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