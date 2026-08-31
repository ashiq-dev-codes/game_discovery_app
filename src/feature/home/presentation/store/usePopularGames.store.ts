import { PopularGameModel } from "@/src/core/model/popular/popularGame.model";
import AppImages from "@/src/shared/path/appImages";
import { create } from "zustand";
import { PopularGamesState } from "./usePopularGames.state";

const INITIAL_GAMES: PopularGameModel[] = [
    {
        id: "1",
        title: "The Last Of Us Part I",
        image: AppImages.popularGame1,
        isFavorite: false,
    },
    {
        id: "2",
        title: "The Last Of Us Part II",
        image: AppImages.popularGame2,
        isFavorite: false,
    },
    {
        id: "3",
        title: "Uncharted 4",
        image: AppImages.popularGame3,
        isFavorite: false,
    },
];

export const usePopularGamesStore = create<PopularGamesState>((set) => ({
    games: INITIAL_GAMES,

    // Equivalent to calling a method in Cubit and calling emit()
    toggleFavorite: (id) =>
        set((state) => ({
            games: state.games.map((game) =>
                game.id === id ? { ...game, isFavorite: !game.isFavorite } : game
            ),
        })),
}));