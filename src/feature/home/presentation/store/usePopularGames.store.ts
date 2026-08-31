import { PopularGameModel } from "@/src/core/model/popular/popularGame.model";
import AppImages from "@/src/shared/path/appImages";
import { create } from "zustand";
import { PopularGamesState, PopularGamesStatus } from "./usePopularGames.state";

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

// Stands in for a real API call until the backend is wired up; fails ~30% of the time to exercise the error state.
const fetchPopularGamesMock = (): Promise<PopularGameModel[]> =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(new Error("Unable to load popular games. Please try again."));
            } else {
                resolve(INITIAL_GAMES);
            }
        }, 3000)
    );

export const usePopularGamesStore = create<PopularGamesState>((set) => ({
    games: [],
    status: PopularGamesStatus.Initial,
    errorMessage: null,

    fetchGames: async () => {
        set({ status: PopularGamesStatus.Loading, errorMessage: null });
        try {
            const games = await fetchPopularGamesMock();
            set({ games, status: PopularGamesStatus.Success });
        } catch (error) {
            set({
                status: PopularGamesStatus.Failure,
                errorMessage:
                    error instanceof Error ? error.message : "Failed to load popular games",
            });
        }
    },

    // Equivalent to calling a method in Cubit and calling emit()
    toggleFavorite: (id) =>
        set((state) => ({
            games: state.games.map((game) =>
                game.id === id ? { ...game, isFavorite: !game.isFavorite } : game
            ),
        })),
}));