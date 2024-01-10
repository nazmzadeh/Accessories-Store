/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import currencySlice from './features/categoriesSlice';

const store = configureStore({
    reducer: {
        currencies: currencySlice
    }
})
export default store;