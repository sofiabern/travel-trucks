import { RootState } from "../store";
import { Filters } from "../../types/filters";
export const selectFilters = (state: RootState): Filters => state.filters;