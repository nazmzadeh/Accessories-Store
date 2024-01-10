/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMenuProps } from '../components/DropdownMenu/Menu';
import { currencies } from '../data/data';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IMenuProps = {
    items: []
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrenciesList: (state, action: PayloadAction<IMenuProps>) => {
            state.items = action.payload.items
        }
    }
})
export const { setCurrenciesList } = currencySlice.actions;
export default currencySlice.reducer;