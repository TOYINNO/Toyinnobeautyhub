import { configureStore } from "@reduxjs/toolkit";
import toyinnobeautyhubReducer from "./beautyhubSlice";
import {
  PersistState,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  WebStorage,
  PURGE,
  persistStore,
} from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

export function createPersistStore(): WebStorage {
  const isServer = typeof window === "undefined";

  //will return our dummy server

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, toyinnobeautyhubReducer);

export const store = configureStore({
  reducer: {
    toyinnobeautyhub: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
