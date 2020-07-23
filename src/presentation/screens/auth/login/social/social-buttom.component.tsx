import React from "react";
import {ImageProps, StyleSheet, View} from "react-native";
import {Button, Divider} from "@ui-kitten/components";
import {RenderProp} from "@ui-kitten/components/devsupport";

type ComponentProps = {
    icon: RenderProp<Partial<ImageProps>>;
    onPres: ()=> void;
}

type Props = ComponentProps

export const SocialButton: React.FC<Props> =
    ({
         icon
     }) => {

        return (
            <Button
                appearance='outline'
                size='giant'
                accessoryLeft={icon}
                style={styles.button}
            />
        )
    }



const styles = StyleSheet.create({
    button: {
        marginHorizontal: 10
    }
})