import React from "react";
import {KeyboardAvoidingView, StyleSheet, View, ViewProps} from "react-native";
import {StyledComponentProps} from "@ui-kitten/components";
import {CommonStyle} from "core/theme/styles/common.styles";
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


export interface FormAreaProps extends ViewProps, StyledComponentProps {
    children?: React.ReactNode;
}

export class FormArea extends React.Component<FormAreaProps> {

    public render() {
        const {style, children, ...viewProps} = this.props;
        return (
            <KeyboardAvoidingView
                {...viewProps}
                // extraHeight={160}
                contentContainerStyle={styles.contentContainer}
                style={[styles.content, style]}>
                {children}
            </KeyboardAvoidingView>
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