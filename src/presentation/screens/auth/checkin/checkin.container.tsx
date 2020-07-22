import {ContentArea} from "components/layouts/content-area.component";
import {Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import React, {useCallback} from "react";
import {CheckinForm, CheckinFormProps} from "./checkin.form";
import {localization} from "localization/index";
import {Link} from "components/content/link.component";

type ComponentProps = {
}

type Props = CheckinFormProps & ComponentProps

export const CheckinContainer: React.FC<Props> =
    ({
         onSubmit
     }) => {
        return (
            <ContentArea>
                <CheckinForm
                    onSubmit={onSubmit}
                />
            </ContentArea>
        )
    }
