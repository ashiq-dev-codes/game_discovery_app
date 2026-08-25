import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";


const splashPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "relative",
    },
    body: {
        top: 0,
        flex: 1,
        bottom: 0,
        width: "100%",
        paddingBottom: 80,
        position: "absolute",
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: "space-between",
    },
    textWrapper: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 80,
        textAlign: "center",
        color: AppColors.whiteColor,
        fontFamily: AppFonts.oleoScriptSwashCapsRegular.name,
    },
    button: {
        height: 60,
        width: 262,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.primaryColor,
    },
    buttonText: {
        fontSize: 32,
        fontWeight: "bold",
        color: AppColors.whiteColor,
        fontFamily: AppFonts.nunitoBold.name,
    },
});

export default splashPageStyles;