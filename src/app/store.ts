/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../features/currenciesSlice";
import languageReducer from "../features/languagesSlice";

const store = configureStore({
    reducer: {
        currencies: currencyReducer,
        languages: languageReducer
    }


})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;