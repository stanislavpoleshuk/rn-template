import {styleSheetCreate} from "core/utilities/style-sheet.utility";
import {TextStyle} from "react-native";

export const FontSize = styleSheetCreate({
    ultraSmall: {
        fontSize: 10,
        lineHeight: 12
    } as TextStyle,
    small: {
        fontSize: 12,
        lineHeight: 16
    } as TextStyle,
    medium: {
        fontSize: 14,
        lineHeight: 18
    } as TextStyle,
    large: {
        fontSize: 18,
        lineHeight: 24
    } as TextStyle,
});