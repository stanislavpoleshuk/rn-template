import React, {useCallback} from "react";
import {StyleSheet} from "react-native";
import {Button, Icon, Input} from "@ui-kitten/components";
import {localization} from "localization/index";
import {Form} from "components/forms/form";
import {FormField} from "components/forms/form-field.component";
import {FormFooter} from "components/forms/form-footer.component";
import {Logo} from "components/ui/logo/logo.component";
import {StringFormatter} from "../../../../infrastructure/utilities/formatter/string.formatter";

export type RestorePasswordFormProps = {
    onSubmit: () => void;
}

type Props = RestorePasswordFormProps;


export const RestorePasswordForm: React.FC<Props> =
    ({
         onSubmit
     }) => {
        const [phone, setPhone] = React.useState<string>(StringFormatter.CountryCode);
        const [isValid, changeValidation] = React.useState<boolean>(false);
        const onSubmitCallback = useCallback(() => onSubmit(), [onSubmit]);

        const onValidationForm = () => {
            if (!phone || phone.length != 17) {
                changeValidation(false);
                return;
            }

            changeValidation(true);
        }


        React.useEffect(() => {
            onValidationForm();
        }, [phone]);


        const onPhoneChange = (value: string | undefined) => {
            value = StringFormatter.ToPhone(value);
            setPhone(value);
        }

        return (
            <Form>
                <Logo styleContainer={styles.logoContainer}/>

                <FormField>
                    <Input
                        value={phone}
                        label={localization.auth.phone}
                        onChangeText={onPhoneChange}
                    />
                </FormField>

                <FormFooter>
                    <Button
                        disabled={isValid == false}
                        onPress={onSubmitCallback}
                    >
                        {localization.auth.restore}
                    </Button>
                </FormFooter>
            </Form>
        )
    }


const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: "center",
        flexDirection: "row",
        padding: 25
    }
})