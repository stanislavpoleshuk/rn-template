import React from "react";
import {TopNavigation, TopNavigationProps} from "@ui-kitten/components/ui/topNavigation/topNavigation.component";
import {Divider} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";


export interface HeaderNavigationProps extends TopNavigationProps {
}

export class HeaderNavigation extends React.Component<HeaderNavigationProps> {

    public render() {
        const {...viewProps} = this.props;
        return (
            <View style={styles.container}>
                <TopNavigation
                    {...viewProps}
                />
                <Divider/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex: 5
    }
})