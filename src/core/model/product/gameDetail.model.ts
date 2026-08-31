import { ImageSourcePropType } from "react-native";

export interface GameDetailModel {
    id: string;
    title: string;
    coverImage: ImageSourcePropType;
    rating: number;
    developer: string;
    duration: string;
    description: string;
    genres: string[];
    platforms: string[];
    isWishlisted: boolean;
}
