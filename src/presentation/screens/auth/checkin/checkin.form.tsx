import React, {useCallback} from "react";
import {StyleSheet, TouchableWithoutFeedback} from "react-native";
import {Button, Icon, Input} from "@ui-kitten/components";
import {localization} from "localization/index";
import {AlertIcon} from "resources/icons";
import {Form} from "components/forms/form";
import {FormField} from "components/forms/form-field.component";
import {FormFooter} from "components/forms/form-footer.component";
import {Logo} from "components/ui/logo/logo.component";
import {StringFormatter} from "../../../../infrastructure/utilities/formatter/string.formatter";

export type CheckinFormProps = {
    onSubmit: () => void;
}

type Props = CheckinFormProps;


export const CheckinForm: React.FC<Props> =
    ({
         onSubmit
     }) => {
        const [name, setName] = React.useState('');
        const [phone, setPhone] = React.useState<string>(StringFormatter.CountryCode);
        const [password, setPassword] = React.useState('');
        const [passwordConfirm, setPasswordConfirm] = React.useState('');
        const [secureTextEntry, setSecureTextEntry] = React.useState(true);
        const [isValid, changeValidation] = React.useState<boolean>(false);
        const onSubmitCallback = useCallback(() => onSubmit(), [onSubmit]);

        const onValidationForm = () => {

            if (!name || name.length < 3) {
                changeValidation(false);
                return;
            }
            if (!phone || phone.length != 17) {
                changeValidation(false);
                return;
            }
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
        }, [name, password, passwordConfirm, phone]);


        const onPhoneChange = (value: string | undefined) => {
            value = StringFormatter.ToPhone(value);
            setPhone(value);
        }

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

        const onNameChange = (value: string | undefined) => {
            setName(value);
        }

        return (
            <Form>
                <Logo styleContainer={styles.logoContainer}/>

                <FormField>
                    <Input
                        autoFocus={true}
                        value={name}
                        label={localization.auth.name}
                        placeholder={localization.auth.namePlh}
                        onChangeText={onNameChange}
                        autoCompleteType={'username'}
                    />
                </FormField>

                <FormField>
                    <Input
                        value={phone}
                        label={localization.auth.phone}
                        onChangeText={onPhoneChange}
                        keyboardType={'phone-pad'}
                        autoCompleteType={'tel'}
                    />
                </FormField>

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
                        autoCompleteType={'password'}
                    />
                </FormField>

                <FormField>
                    <Input
                        value={passwordConfirm}
                        label={localization.auth.passwordConfirm}
                        placeholder={localization.auth.passwordPlh}
                        caption={localization.auth.passwordCaption}
                        accessoryRight={PasswordIcon}
                        captionIcon={AlertIcon}
                        secureTextEntry={secureTextEntry}
                        onChangeText={onPasswordConfirmChange}
                        autoCompleteType={'password'}
                    />
                </FormField>

                <FormFooter>
                    <Button
                        disabled={isValid == false}
                        onPress={onSubmitCallback}
                    >
                        {localization.auth.signUpSubmit}
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