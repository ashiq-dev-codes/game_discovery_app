import { GameDetailModel } from "@/src/core/model/product/gameDetail.model";

export enum GameDetailStatus {
    Initial = "initial",
    Loading = "loading",
    Success = "success",
    Failure = "failure",
}

export interface GameDetailState {
    game: GameDetailModel | null;
    status: GameDetailStatus;
    errorMessage: string | null;
    fetchGameDetail: (id: string) => Promise<void>;
    toggleWishlist: () => void;
}
