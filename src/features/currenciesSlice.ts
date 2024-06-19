/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMenuItemProps, IMenuProps } from '../components/DropdownMenu/Menu';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: IMenuProps = {
    items: []

}

const currencySlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        setCurrenciesList: (state, action: PayloadAction<IMenuItemProps[]>) => {
            state.items = action.payload
        },

    }
})
export const { setCurrenciesList } = currencySlice.actions;
export default currencySlice.reducer;