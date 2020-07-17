import {ContentArea} from "components/layouts/content-area.component";
import React from "react";
import {ChangePasswordForm, ChangePasswordFormProps} from "./change-password.form";

type ComponentProps = {}

type Props = ChangePasswordFormProps & ComponentProps

export const ChangePasswordContainer: React.FC<Props> =
    ({
         onSubmit
     }) => {

        return (
            <ContentArea>
                <ChangePasswordForm
                    onSubmit={onSubmit}
                />
            </ContentArea>
        )
    }