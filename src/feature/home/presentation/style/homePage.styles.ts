import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";

const homePagestyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    appBar: {
        paddingVertical: 5,
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
        fontFamily: AppFonts.nunitoBold.name,
    },
    appBarImage: {
        width: 48,
        height: 48,
        borderRadius: 8,
    },
    homeHeading: {
        fontSize: 33,
        marginTop: 15,
        marginHorizontal: 20,
        color: AppColors.blackColor,
        fontFamily: AppFonts.nunitoBlack.name,
    },
    searchBar: {
        marginTop: 15,
        borderRadius: 25,
        paddingVertical: 12,
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
        paddingHorizontal: 16,
        justifyContent: "space-between",
        backgroundColor: AppColors.lightGrayColor,
    },
    searchInput: {
        flex: 1,
        padding: 0,
        fontSize: 16,
        color: AppColors.blackColor,
        fontFamily: AppFonts.nunitoBold.name,
    },
});

export default homePagestyles;