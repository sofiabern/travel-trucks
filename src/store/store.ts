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
import { Persistor } from "redux-persist"; 
import { FavoriteState } from "./favorite/slice";


const favoritePersistConfiguration = {
  key: "favorite",
  storage,
  whitelist: ["favIds"],
};

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    trucks: trucksReducer,
    favorite: persistReducer<FavoriteState>(favoritePersistConfiguration, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const persistor: Persistor = persistStore(store);