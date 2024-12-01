import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { trucksReducer } from "./trucks/slice"; 
import { filtersReducer } from "./filters/slice";
import { favoritesReducer } from "./favorite/slice";

const favoritePersistConfiguration = {
  key: "favorite",
  storage,
  whitelist: ["favIds"], 
};

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    trucks: trucksReducer,
    favorite: persistReducer(favoritePersistConfiguration, favoritesReducer)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);