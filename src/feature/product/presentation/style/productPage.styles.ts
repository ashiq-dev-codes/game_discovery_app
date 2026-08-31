import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";

const productPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.whiteColor,
    },
    scrollContent: {
        paddingBottom: 30,
    },

    // Cover
    coverContainer: {
        height: 420,
    },
    coverImage: {
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    backButton: {
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.withOpacity(AppColors.blackColor, 0.35),
    },

    // Content
    content: {
        marginTop: 20,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        textAlign: "center",
        color: AppColors.blackColor,
        fontFamily: AppFonts.poppinsBold.name,
    },
    metaRow: {
        gap: 6,
        marginTop: 12,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    metaText: {
        fontSize: 13,
        color: AppColors.gray600,
        fontFamily: AppFonts.nunitoSemiBold.name,
    },
    sectionHeading: {
        fontSize: 20,
        marginTop: 24,
        color: AppColors.blackColor,
        fontFamily: AppFonts.poppinsBold.name,
    },
    description: {
        fontSize: 14,
        marginTop: 10,
        lineHeight: 21,
        color: AppColors.gray600,
        fontFamily: AppFonts.nunitoSemiBold.name,
    },

    // Info card
    infoCard: {
        marginTop: 20,
        borderRadius: 20,
        paddingVertical: 4,
        borderWidth: 1,
        paddingHorizontal: 16,
        borderColor: AppColors.gray300,
    },
    divider: {
        height: 1,
        backgroundColor: AppColors.gray300,
    },

    // State container (loading / error / empty)
    stateContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    errorText: {
        fontSize: 14,
        textAlign: "center",
        color: AppColors.error600,
        fontFamily: AppFonts.nunitoBold.name,
    },
    retryText: {
        fontSize: 14,
        marginTop: 10,
        color: AppColors.skyBlueColor,
        fontFamily: AppFonts.nunitoBold.name,
    },

    // Action bar
    actionBar: {
        gap: 14,
        paddingTop: 12,
        paddingBottom: 16,
        flexDirection: "row",
        paddingHorizontal: 24,
        borderTopWidth: 1,
        borderTopColor: AppColors.gray300,
        backgroundColor: AppColors.whiteColor,
    },
    wishlistButton: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 25,
        paddingVertical: 14,
        alignItems: "center",
        borderColor: AppColors.primaryColor,
    },
    wishlistButtonText: {
        fontSize: 15,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.nunitoBold.name,
    },
    playButton: {
        flex: 1,
        borderRadius: 25,
        paddingVertical: 14,
        alignItems: "center",
        backgroundColor: AppColors.primaryColor,
    },
    playButtonText: {
        fontSize: 15,
        color: AppColors.whiteColor,
        fontFamily: AppFonts.nunitoBold.name,
    },
});

export default productPageStyles;
