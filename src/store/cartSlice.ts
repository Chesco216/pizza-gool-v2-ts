import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type cartItemType = {
  id: number
  img: string
  name: string
  cant: number
  subtotal: number
}

export interface cartSliceInt {
  items: Array<cartItemType>,
  total: number
}

const initialState: cartSliceInt = {
  items: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_to_cart: (state, action: PayloadAction<cartItemType>) =>{
      state.items.push(action.payload),
      state.total = state.total + action.payload.subtotal
    },
    remove_item: (state, action: PayloadAction<number>) => {
          state.items = state.items.filter(item => item.id != action.payload),
          state.total = state.total - state.items.filter(item => item.id = action.payload)[0].subtotal
    },
    clear_cart: (state) => initialState
  } 
})

export const {add_to_cart, remove_item, clear_cart} = cartSlice.actions
