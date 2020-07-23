import React from "react";
import {StyleSheet, View} from "react-native";
import {SocialButton} from "screens/auth/login/social/social-buttom.component";
import {FacebookIcon, GoogleIcon, VkIcon} from "resources/icons";
import {Text} from "@ui-kitten/components";
import {localization} from "localization/index";

type ComponentProps = {}

type Props = ComponentProps

export const SocialLoginContainer: React.FC<Props> =
    ({}) => {

        const onGooglePress = () => {

        }

        const onFacebookPress = () => {

        }

        const onVkPress = () => {

        }

        return (
            <View style={styles.container}>
                <Text style={styles.orSignInWIth}>{localization.auth.orSignInWIth}</Text>
                <View style={styles.buttonsContainer}>
                    <SocialButton
                        icon={GoogleIcon}
                        onPres={onGooglePress}
                    />
                    <SocialButton
                        icon={FacebookIcon}
                        onPres={onFacebookPress}
                    />
                    <SocialButton
                        icon={VkIcon}
                        onPres={onVkPress}
                    />
                </View>
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        position: "relative"
    },
    orSignInWIth: {
        textAlign: 'center',
        textTransform: "lowercase"
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 30
    }
})