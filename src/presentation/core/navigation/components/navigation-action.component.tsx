import React from "react";
import {TopNavigationAction} from "@ui-kitten/components";
import {TopNavigationActionProps} from "@ui-kitten/components/ui/topNavigation/topNavigationAction.component";
import {StyleSheet} from "react-native";

type Props = TopNavigationActionProps;

export const NavigationAction: React.FC<Props> =
    ({style, ...rest}) => {
        return (
            <TopNavigationAction
                {...rest}
                style={[style, styles.container]}
            />
        )
    }

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 7
    }
})