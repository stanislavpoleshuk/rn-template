import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import React from "react";
import {PhoneConfirmForm, PhoneConfirmFormProps} from "./phone-confirm.form";
import {FormArea} from "components/layouts/form-area.component";

type ComponentProps = {}

type Props = PhoneConfirmFormProps & ComponentProps

export const PhoneConfirmContainer: React.FC<Props> =
    ({
         onSubmit, onResendCode
     }) => {
        return (
            <FormArea>
                <PhoneConfirmForm
                    onSubmit={onSubmit}
                    onResendCode={onResendCode}
                />
            </FormArea>
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