import {ContentArea} from "components/layouts/content-area.component";
import React from "react";
import {ChangePasswordForm, ChangePasswordFormProps} from "./change-password.form";
import {FormArea} from "components/layouts/form-area.component";

type ComponentProps = {}

type Props = ChangePasswordFormProps & ComponentProps

export const ChangePasswordContainer: React.FC<Props> =
    ({
         onSubmit
     }) => {

        return (
            <FormArea>
                <ChangePasswordForm
                    onSubmit={onSubmit}
                />
            </FormArea>
        )
    }