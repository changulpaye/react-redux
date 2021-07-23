import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import logger from "./middleware/logger";
import toastify from "./middleware/toastify";
import api from "./middleware/api";

export default function ConfigureStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(toastify)
        .concat(logger({ destination: "console" }))
        .concat(api),
  });
  return store;
}
