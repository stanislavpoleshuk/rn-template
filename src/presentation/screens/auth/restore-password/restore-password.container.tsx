import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import React from "react";
import {RestorePasswordForm, RestorePasswordFormProps} from "./restore-password.form";

type ComponentProps = {}

type Props = RestorePasswordFormProps & ComponentProps

export const RestorePasswordContainer: React.FC<Props> =
    ({
         onSubmit
     }) => {
        return (
            <ContentArea>
                <RestorePasswordForm
                    onSubmit={onSubmit}
                />
            </ContentArea>
        )
    }


const styles = StyleSheet.create({})