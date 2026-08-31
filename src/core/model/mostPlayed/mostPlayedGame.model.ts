import { ImageSourcePropType } from "react-native";

export interface MostPlayedGameModel {
    id: string;
    title: string;
    image: ImageSourcePropType;
    rating: number;
    developer: string;
    duration: string;
}
