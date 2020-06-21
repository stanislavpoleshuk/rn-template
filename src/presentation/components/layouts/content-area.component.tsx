import React from "react";
import {StyleSheet, View, ViewProps} from "react-native";
import {StyledComponentProps} from "@ui-kitten/components";
import {CommonStyle} from "core/theme/styles/common.styles";


export interface ContentAreaProps extends ViewProps, StyledComponentProps {
    children?: React.ReactNode;
}

export class ContentArea extends React.Component<ContentAreaProps> {

    public render() {
        const {style, ...viewProps} = this.props;
        return (
            <View
                {...viewProps}
                style={[styles.content, style]}/>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        ...CommonStyle.content,
        flex: 1,
    }
})