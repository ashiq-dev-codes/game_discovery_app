import { PopularGameModel } from "@/src/core/model/popular/popularGame.model";

export interface PopularGamesState {
    games: PopularGameModel[];
    toggleFavorite: (id: string) => void;
}