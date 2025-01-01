import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Filters } from "../../types/filters";
import { Truck } from "../../types/truck";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchTrucks = createAsyncThunk<
  FetchTrucksResponse,
  { page: number; filters: Filters },
  { rejectValue: string }
>(
  "trucks/fetchAll",
  async (
    { page, filters = {} }: { page: number; filters: Filters },
    thunkAPI
  ) => {
    try {
      const params = applyFilters(page, 4, filters);
      const { data } = await axios.get("/campers", { params });

      return { items: data.items, total: data.total };
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error.response?.status === 404) {
          return thunkAPI.rejectWithValue(
            "No trucks found matching your filters."
          );
        } else {
          return thunkAPI.rejectWithValue("Oops! Something went wrong. Please try again later.");
        }
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const fetchTruck = createAsyncThunk<
  Truck,
  string,
  { rejectValue: string }
>("trucks/fetchDetails", async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`/campers/${id}`);
    return data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
});

const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError).isAxiosError !== undefined;
};

const applyFilters = (
  page: number,
  limit: number,
  filters: Filters
): Params => {
  const params: Params = {
    page,
    limit,
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

  return params;
};

interface FetchTrucksResponse {
  items: Truck[];
  total: number;
}

interface Params {
  page: number;
  limit: number;
  location?: string;
  transmission?: string;
  form?: string;
  AC?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  bathroom?: boolean;
  [key: string]: string | boolean | number | undefined;
}
