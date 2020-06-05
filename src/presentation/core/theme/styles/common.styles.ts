import {styleSheetCreate, styleSheetFlatten} from "../../utilities/style-sheet.utility";

export const CommonStyle = styleSheetCreate({
    safeArea: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})