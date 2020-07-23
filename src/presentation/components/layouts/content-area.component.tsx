import React from "react";
import {StyleSheet, View, ViewProps} from "react-native";
import {StyledComponentProps} from "@ui-kitten/components";
import {CommonStyle} from "core/theme/styles/common.styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export interface ContentAreaProps extends ViewProps, StyledComponentProps {
    children?: React.ReactNode;
}

export class ContentArea extends React.Component<ContentAreaProps> {

    public render() {
        const {style, ...viewProps} = this.props;
        return (
            <KeyboardAwareScrollView
                {...viewProps}
                extraHeight={160}
                contentContainerStyle={styles.contentContainer}
                style={[styles.content, style]}/>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        ...CommonStyle.content,
        flex: 1,
    },
    contentContainer: {
        flex: 1
    }
})