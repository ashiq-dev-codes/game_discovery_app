import { ImageSourcePropType } from "react-native";

export interface PopularGameModel {
    id: string;
    title: string;
    image: ImageSourcePropType;
    isFavorite: boolean;
}