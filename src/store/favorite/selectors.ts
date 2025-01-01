import { RootState } from "../store"
export const selectFav = (state: RootState): string[] => state.favorite.favIds