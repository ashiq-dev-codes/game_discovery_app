import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";

const homePagestyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    appBar: {
        height: 52,
        paddingVertical: 15,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 30,
        backgroundColor: "white",
        justifyContent: "space-between",
    },
    appBarHeadingBox: {
        padding: 12,
        borderRadius: 16,
        backgroundColor: AppColors.lightGrayColor,
    },
    appBarHeadingBoxText: {
        fontSize: 16,
        color: AppColors.darkGrayColor,
    },
    appBarImage: {
        width: 48,
        height: 48,
        borderRadius: 8,
    }
});

export default homePagestyles;