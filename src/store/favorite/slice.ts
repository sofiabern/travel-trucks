import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteState {
  favIds: string[]; 
}

const initialState: FavoriteState = {
  favIds: [], 
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) { 
      const id = action.payload;
      if (state.favIds.includes(id)) {
        state.favIds = state.favIds.filter((favId) => favId !== id);
      } else {
        state.favIds.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export const favoritesReducer = favoriteSlice.reducer;