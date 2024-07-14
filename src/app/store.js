
// creating store
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/API";
// we export an object so that we can use it on other file
export const store = configureStore({


    reducer: {
        [productsApi.reducerPath]: productsApi.reducer
    },  // we can use a lot reducers here  and within that reducer we passing property value of an object we what

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);



