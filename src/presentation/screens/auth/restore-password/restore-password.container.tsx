import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import React from "react";
import {RestorePasswordForm, RestorePasswordFormProps} from "./restore-password.form";
import {FormArea} from "components/layouts/form-area.component";

type ComponentProps = {}

type Props = RestorePasswordFormProps & ComponentProps

export const RestorePasswordContainer: React.FC<Props> =
    ({
         onSubmit
     }) => {
        return (
            <FormArea>
                <RestorePasswordForm
                    onSubmit={onSubmit}
                />
            </FormArea>
        )
    }


const styles = StyleSheet.create({})