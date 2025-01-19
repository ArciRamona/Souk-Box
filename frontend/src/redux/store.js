// Create Redux toolkit Store

import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/productsApi";

// import rootReducer from './reducers'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
