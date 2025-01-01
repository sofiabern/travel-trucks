import { createSlice } from '@reduxjs/toolkit';
import { Filters } from '../../types/filters';

const initialState:Filters = {
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

    setFilter(_, action) {
      return action.payload;
     },
  },
});

export const { setFilter} = filtersSlice.actions;
export const filtersReducer =  filtersSlice.reducer;