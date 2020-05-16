import {styleSheetCreate, styleSheetFlatten} from "../../utilities/style-sheet.utility";
import {Colors} from "../colors.theme";

export const CommonStyle = styleSheetCreate({
    lightSafeArea: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})