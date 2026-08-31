import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ProductInfoRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
}

const ProductInfoRow = ({ icon, title, subtitle }: ProductInfoRowProps) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={20} color={AppColors.whiteColor} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={AppColors.gray500} />
    </View>
  );
};

export default ProductInfoRow;

const styles = StyleSheet.create({
  row: {
    gap: 12,
    paddingVertical: 14,
    alignItems: "center",
    flexDirection: "row",
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.primaryColor,
  },
  textBox: {
    flex: 1,
    gap: 3,
  },
  title: {
    fontSize: 14,
    color: AppColors.blackColor,
    fontFamily: AppFonts.nunitoBold.name,
  },
  subtitle: {
    fontSize: 12,
    color: AppColors.gray600,
    fontFamily: AppFonts.nunitoSemiBold.name,
  },
});
