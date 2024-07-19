/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItemState, ICartState } from '../types';

const initialState: ICartState = {
    items: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItemState>) => {
            const { id, name } = action.payload;
            const existingItem = state.items.find((item) => item.id === id)
            if (existingItem) {
                existingItem.quantity++
            } else {
                state.items.push({ id, name, quantity: 1 })
            }

        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;