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
    text: {
        fontSize: 80,
        position: "absolute",
        fontWeight: "regular",
        paddingHorizontal: 20,
        color: AppColors.whiteColor,
    }
});

export default splashPageStyles;