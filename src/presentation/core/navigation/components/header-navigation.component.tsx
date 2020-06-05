import React from "react";
import {StyleSheet, View, ViewProps} from "react-native";
import {CommonStyle} from "../../theme/styles/common.styles";
import {TopNavigation, TopNavigationProps} from "@ui-kitten/components/ui/topNavigation/topNavigation.component";
import {Divider} from "@ui-kitten/components";


export interface HeaderNavigationProps extends TopNavigationProps {
}

export class HeaderNavigation extends React.Component<HeaderNavigationProps> {

    public render() {
        const {...viewProps} = this.props;
        return (
            <React.Fragment>
                <TopNavigation
                    {...viewProps}
                    titleStyle={styles.titleStyle}
                />
                <Divider/>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
       // ...textStyle.title
    }
})