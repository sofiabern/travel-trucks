import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: "", 
  automatic: false,
  AC: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  truckType: "",
  filtersSubmitted: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {

    setFilter(state, action) {
      const { name, value } = action.payload;
      state[name] = value;  
    },
  },
});

export const { setFilter} = filtersSlice.actions;
export const filtersReducer =  filtersSlice.reducer;
