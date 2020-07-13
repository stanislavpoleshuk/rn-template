import React, {useCallback} from "react";
import {StyleSheet, TouchableWithoutFeedback} from "react-native";
import {Button, Icon, Input} from "@ui-kitten/components";
import {localization} from "localization/index";
import {AlertIcon} from "resources/icons";
import {Form} from "components/forms/form";
import {FormField} from "components/forms/form-field.component";
import {FormFooter} from "components/forms/form-footer.component";
import {Logo} from "components/ui/logo/logo.component";
import {Link} from "components/content/link.component";

export type AuthFormProps = {
    onSubmit: () => void;
    onForgotPress: () => void;
}

type Props = AuthFormProps;


export const AuthForm: React.FC<Props> =
    ({
         onSubmit, onForgotPress
     }) => {
        const countryCode = "+ (373) ";

        const [phone, setPhone] = React.useState<string>(countryCode);
        const [password, setPassword] = React.useState('');
        const [secureTextEntry, setSecureTextEntry] = React.useState(true);
        const [isValid, changeValidation] = React.useState<boolean>(false);
        const onSubmitCallback = useCallback(() => onSubmit(), [onSubmit]);
        const onForgotCallback = useCallback(() => onForgotPress(), [onForgotPress]);

        const onValidationForm = () => {
            if (!phone || phone.length != 17) {
                changeValidation(false);
                return;
            }
            if (!password || password.length < 8) {
                changeValidation(false);
                return;
            }
            changeValidation(true);
        }

        React.useEffect(() => {
            onValidationForm();
        }, [password, phone]);


        const onPhoneChange = (value: string | undefined) => {
            const x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,5})/);
            value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            setPhone(`+ ${value}`);
        }

        const onPasswordChange = (value: string | undefined) => {
            setPassword(value);
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
                        value={phone}
                        label={localization.auth.phone}
                        onChangeText={onPhoneChange}
                        // accessoryLeft={PhoneIcon}
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
                    />
                </FormField>

                <FormField style={styles.forgotContainer}>
                    <Link
                        text={localization.auth.forgot}
                        onPress={onForgotCallback}
                    />
                </FormField>

                <FormFooter>
                    <Button
                        disabled={isValid == false}
                        onPress={onSubmitCallback}
                    >
                        {localization.auth.submit}
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