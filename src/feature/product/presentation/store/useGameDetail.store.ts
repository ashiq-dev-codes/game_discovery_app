import { GameDetailModel } from "@/src/core/model/product/gameDetail.model";
import AppImages from "@/src/shared/path/appImages";
import { create } from "zustand";
import { GameDetailState, GameDetailStatus } from "./useGameDetail.state";

const GAME_DETAILS: Record<string, GameDetailModel> = {
    "1": {
        id: "1",
        title: "The Last of Us Part II",
        coverImage: AppImages.gameDetails,
        rating: 4.8,
        developer: "Naughty Dog",
        duration: "24–30 Hours",
        description:
            "Experience Ellie's emotional journey through a dangerous post-apocalyptic world filled with survival, revenge, and unforgettable moments.",
        genres: ["Action", "Adventure", "Survival"],
        platforms: ["PlayStation 4", "PlayStation 5"],
        isWishlisted: false,
    },
};

// Stands in for a real API call until the backend is wired up; fails ~10% of the time to exercise the error state.
const fetchGameDetailMock = (id: string): Promise<GameDetailModel> =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            // if (Math.random() < 0.3) {
            //     reject(new Error("Unable to load game details. Please try again."));
            // } else {
            // }
            resolve(GAME_DETAILS[id] ?? GAME_DETAILS["1"]);
        }, 1200)
    );

export const useGameDetailStore = create<GameDetailState>((set) => ({
    game: null,
    status: GameDetailStatus.Initial,
    errorMessage: null,

    fetchGameDetail: async (id) => {
        set({ status: GameDetailStatus.Loading, errorMessage: null });
        try {
            const game = await fetchGameDetailMock(id);
            set({ game, status: GameDetailStatus.Success });
        } catch (error) {
            set({
                status: GameDetailStatus.Failure,
                errorMessage:
                    error instanceof Error ? error.message : "Failed to load game details",
            });
        }
    },

    toggleWishlist: () =>
        set((state) => ({
            game: state.game
                ? { ...state.game, isWishlisted: !state.game.isWishlisted }
                : state.game,
        })),
}));
