import React, {useCallback, useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {Button, Input} from "@ui-kitten/components";
import {localization} from "localization/index";
import {Form} from "components/forms/form";
import {FormField} from "components/forms/form-field.component";
import {FormFooter} from "components/forms/form-footer.component";
import {Logo} from "components/ui/logo/logo.component";

export type PhoneConfirmFormProps = {
    onSubmit: () => void;
    onResendCode: () => void;
}

type Props = PhoneConfirmFormProps;

const DEV_CODE = `1101`;
const SECONDS = 5;

export const PhoneConfirmForm: React.FC<Props> =
    ({
         onSubmit, onResendCode
     }) => {

        const [code, setCode] = useState<string>('');
        const [isValid, changeValidation] = React.useState<boolean>(false);
        const [timeLeft, setTimeLeft] = useState(SECONDS);
        const onSubmitCallback = useCallback(() => onSubmit(), [onSubmit]);

        const onResendCodePress = () => {
            onResendCode();
            changeValidation(false);
            setTimeLeft(SECONDS);
        }
        const onResendCodeCallback = useCallback(() => onResendCodePress(), [onResendCodePress]);

        const onValidationForm = () => {
            if (DEV_CODE !== code) {
                return;
            }

            onSubmitCallback();
        }

        useEffect(() => {
            onValidationForm();
        }, [code]);

        useEffect(() => {
            if (!timeLeft) {
                changeValidation(true);
                return;
            }
            const intervalId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        }, [timeLeft]);

        const onCodeChange = (value: string | undefined) => {
            const x = value.replace(/\D/g, '').match(/(\d{0,4})/);
            value = !x[2] ? x[1] : x[1];
            setCode(`${value}`);
        }

        return (
            <Form>
                <Logo styleContainer={styles.logoContainer}/>

                <FormField>
                    <Input
                        value={code}
                        label={localization.auth.confirmCode}
                        onChangeText={onCodeChange}
                    />
                </FormField>

                <FormFooter>
                    <Button
                        disabled={isValid == false}
                        appearance={'outline'}
                        onPress={onResendCodeCallback}
                    >
                        {
                            isValid ?
                                `${localization.auth.resendConfirmCode}`
                                :
                                `${localization.auth.resendConfirmCodeTimer} ${timeLeft} ${localization.common.seconds}`
                        }
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