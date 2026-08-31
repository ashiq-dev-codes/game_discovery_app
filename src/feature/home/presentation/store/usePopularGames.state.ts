import { PopularGameModel } from "@/src/core/model/popular/popularGame.model";

export enum PopularGamesStatus {
    Initial = "initial",
    Loading = "loading",
    Success = "success",
    Failure = "failure",
}

export interface PopularGamesState {
    games: PopularGameModel[];
    status: PopularGamesStatus;
    errorMessage: string | null;
    fetchGames: () => Promise<void>;
    toggleFavorite: (id: string) => void;
}