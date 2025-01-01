import { RootState } from "../store";
import { Truck } from "../../types/truck";


export const selectTrucks = (state: RootState): Truck[] => state.trucks.items;
export const selectLoading = (state: RootState): boolean => state.trucks.loading;
export const selectTotalItems = (state: RootState): number => state.trucks.totalItems;
export const selectCurrentPage = (state: RootState): number => state.trucks.currentPage;
export const selectHasMore = (state: RootState): boolean => 
  state.trucks.items.length < state.trucks.totalItems;
export const selectFetchError = (state: RootState): string | null => state.trucks.error;
export const selectTruck = (state: RootState): Truck | null => state.trucks.selectedTruck;