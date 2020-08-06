import React from "react";
import {CheckinForm, CheckinFormProps} from "./checkin.form";
import {FormArea} from "components/layouts/form-area.component";

type ComponentProps = {
}

type Props = CheckinFormProps & ComponentProps

export const CheckinContainer: React.FC<Props> =
    ({
         onSubmit
     }) => {
        return (
            <FormArea>
                <CheckinForm
                    onSubmit={onSubmit}
                />
            </FormArea>
        )
    }
