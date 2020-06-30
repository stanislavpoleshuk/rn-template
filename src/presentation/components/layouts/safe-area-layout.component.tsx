import React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";

type Inset = 'top' | 'bottom';

type Props = {
    children: React.ReactNode;
    style?: ViewStyle;
    insets?: Inset;
};

const insetsStyle = (insets?: Inset) => {
    const INSETS = useSafeAreaInsets();
    if (!insets) return {}
    switch (insets) {
        case "top":
            return {
                paddingTop: INSETS.top,
            }
        case "bottom":
            return {
                paddingBottom: INSETS.bottom,
            }
    }
}

export const SafeAreaLayout = ({children, insets, style}: Props): React.ReactElement => {
    return (
        <SafeAreaView
            style={[insetsStyle(insets), style]}
        >
            {children}
        </SafeAreaView>
    );
}