import {Backdrop as BackdropContainer} from "react-native-backdrop";
import {View, ViewStyle} from "react-native";
import React, {useState} from "react";
import {Text} from "@ui-kitten/components";


type Props = {
    visible: boolean;
    overlayColor?: string;
    handleOpen?: () => void;
    handleClose?: () => void;
    closedHeight?: 0;
    header?: React.ReactElement,
    backdropStyle?: ViewStyle;
    containerStyle?: ViewStyle;
    animationConfig?: any;
    swipeConfig?: any;
    beforeOpen?: () => {};
    afterOpen?: () => {};
    beforeClose?: () => {};
    afterClose?: () => {};
}

export const Backdrop: React.FC<Props> = ({visible, handleOpen, handleClose, ...rest}) => {

    return (
        <BackdropContainer
            {...rest}
            visible={visible}
            swipeConfig={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80,
            }}
            animationConfig={{
                speed: 14,
                bounciness: 4,
            }}
            overlayColor="rgba(0,0,0,0.32)"
            backdropStyle={{
                backgroundColor: '#fff',
            }}>
            <View>
                <Text>Backdrop Content</Text>
            </View>
        </BackdropContainer>
    );
}

