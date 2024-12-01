import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchTrucks = createAsyncThunk(
  "trucks/fetchAll",
  async ({ page, filters = {} }, thunkAPI) => {
    try {
      const params = {
        page,
        limit: 4,
      };

      if (filters.location?.trim()) {
        params.location = filters.location.trim();
      }

      if (filters.automatic) {
        params.transmission = "automatic";
      }

      if (filters.truckType) {
        params.form = filters.truckType;
      }

      const booleanFilters = ["AC", "kitchen", "TV", "bathroom"];
      booleanFilters.forEach((filter) => {
        if (filters[filter]) {
          params[filter] = true;
        }
      });

      const { data } = await axios.get("/campers", { params });

      return { items: data.items, total: data.total };
    } catch (error) {
      if (error.response?.status === 404) {
        return thunkAPI.rejectWithValue("Items matching your filter not found");
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const fetchTruck = createAsyncThunk(
  "trucks/fetchDetails",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
