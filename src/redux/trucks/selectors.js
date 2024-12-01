export const selectTrucks = (state) => state.trucks.items; 
export const selectLoading = (state) => state.trucks.loading; 
export const selectTotalItems = (state) => state.trucks.totalItems; 
export const selectCurrentPage = (state) => state.trucks.currentPage; 
export const selectHasMore = (state) => state.trucks.items.length < state.trucks.totalItems;
export const selectFetchError = (state) => state.trucks.error;
  