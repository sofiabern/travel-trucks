import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks, fetchTruck } from "./operations"; 

const trucksInitialState = {
  items: [],
  totalItems: 0,
  currentPage: 1,
  loading: false,
  error: null,
  selectedTruck: null,
};

const handleError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState: trucksInitialState,
  reducers: {
    resetTrucks(state) {
      state.items = [];
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, handlePending)

      .addCase(fetchTrucks.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.error = null;
        state.loading = false;
        state.items = [...state.items, ...items];
        state.totalItems = total;
        state.currentPage += 1;
      })

      .addCase(fetchTrucks.rejected, handleError)
      .addCase(fetchTruck.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTruck.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTruck = action.payload;
      })
      .addCase(fetchTruck.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetTrucks } = trucksSlice.actions;
export const trucksReducer = trucksSlice.reducer;
