import React from "react";
import {StyleSheet, ViewProps} from "react-native";
import {StyledComponentProps} from "@ui-kitten/components";
import {CommonStyle} from "core/theme/styles/common.styles";
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'


export interface FormAreaProps extends ViewProps, StyledComponentProps {
    children?: React.ReactNode;
}

export class FormArea extends React.Component<FormAreaProps> {

    public render() {
        const {style, children, ...viewProps} = this.props;
        return (
            <KeyboardAwareScrollView
                {...viewProps}
                extraHeight={160}
                contentContainerStyle={styles.contentContainer}
                style={[styles.content, style]}>
                {children}
            </KeyboardAwareScrollView>
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