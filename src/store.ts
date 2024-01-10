/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import { currencies } from './data/data';
import currencySlice from './features/categoriesSlice';

const store = configureStore({
    reducer: {
        currencies: currencySlice
    }
})
export default store;