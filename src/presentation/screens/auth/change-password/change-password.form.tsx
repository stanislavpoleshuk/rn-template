import React, {useCallback} from "react";
import {StyleSheet, TouchableWithoutFeedback} from "react-native";
import {Button, Icon, Input} from "@ui-kitten/components";
import {localization} from "localization/index";
import {AlertIcon} from "resources/icons";
import {Form} from "components/forms/form";
import {FormField} from "components/forms/form-field.component";
import {FormFooter} from "components/forms/form-footer.component";
import {Logo} from "components/ui/logo/logo.component";

export type ChangePasswordFormProps = {
    onSubmit: () => void;
}

type Props = ChangePasswordFormProps;


export const ChangePasswordForm: React.FC<Props> =
    ({
         onSubmit
     }) => {

        const [password, setPassword] = React.useState('');
        const [passwordConfirm, setPasswordConfirm] = React.useState('');
        const [secureTextEntry, setSecureTextEntry] = React.useState(true);
        const [isValid, changeValidation] = React.useState<boolean>(false);
        const onSubmitCallback = useCallback(() => onSubmit(), [onSubmit]);

        const onValidationForm = () => {
            if (!password || password.length < 8) {
                changeValidation(false);
                return;
            }
            if (!passwordConfirm || passwordConfirm.length < 8) {
                changeValidation(false);
                return;
            }
            if (password !== passwordConfirm) {
                changeValidation(false);
                return;
            }
            changeValidation(true);
        }

        React.useEffect(() => {
            onValidationForm();
        }, [password, passwordConfirm]);

        const onPasswordChange = (value: string | undefined) => {
            setPassword(value);
        }

        const onPasswordConfirmChange = (value: string | undefined) => {
            setPasswordConfirm(value);
        }

        const toggleSecureEntry = () => {
            setSecureTextEntry(!secureTextEntry);
        };

        const PasswordIcon = (props) => (
            <TouchableWithoutFeedback onPress={toggleSecureEntry}>
                <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
            </TouchableWithoutFeedback>
        );

        return (
            <Form>
                <Logo styleContainer={styles.logoContainer}/>

                <FormField>
                    <Input
                        value={password}
                        label={localization.auth.password}
                        placeholder={localization.auth.passwordPlh}
                        caption={localization.auth.passwordCaption}
                        accessoryRight={PasswordIcon}
                        captionIcon={AlertIcon}
                        secureTextEntry={secureTextEntry}
                        onChangeText={onPasswordChange}
                    />
                </FormField>


                <FormField>
                    <Input
                        value={password}
                        label={localization.auth.resendConfirmCode}
                        placeholder={localization.auth.passwordPlh}
                        caption={localization.auth.passwordCaption}
                        accessoryRight={PasswordIcon}
                        captionIcon={AlertIcon}
                        secureTextEntry={secureTextEntry}
                        onChangeText={onPasswordConfirmChange}
                    />
                </FormField>

                <FormFooter>
                    <Button
                        disabled={isValid == false}
                        onPress={onSubmitCallback}
                    >
                        {localization.auth.edit}
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
    },
    forgotContainer: {
        justifyContent: "center",
        flexDirection: "row",
    }
})