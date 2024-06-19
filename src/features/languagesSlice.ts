/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMenuItemProps, IMenuProps } from '../components/DropdownMenu/Menu';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: IMenuProps = {
    items: []

}

const languageSlice = createSlice({
    name: 'languages',
    initialState,
    reducers: {
        setLanguagesList: (state, action: PayloadAction<IMenuItemProps[]>) => {
            state.items = action.payload
        },

    }
})
export const { setLanguagesList } = languageSlice.actions;
export default languageSlice.reducer;