import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cartSliceInt {
  pizza_id: Array<number>
  drink_id: Array<number>
  promo_id: Array<number>
}

const initialState: cartSliceInt = {
  pizza_id: [],
  drink_id: [],
  promo_id: []
}

type payloadType = {
  cat: string,
  id: number
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_to_cart: (state, action: PayloadAction<payloadType>) =>{
      (action.payload.cat == 'pizza') ?
          state.pizza_id.push(action.payload.id)
        :
          (action.payload.cat == 'promo') ?
              state.promo_id.push(action.payload.id)
            :
              state.drink_id.push(action.payload.id)
    },
    remove_item: (state, action: PayloadAction<payloadType>) => {
      (action.payload.cat == 'pizza') ?
          state.pizza_id.filter(id => id != action.payload.id)
        :
          (action.payload.cat == 'promo') ?
              state.promo_id.filter(id => id != action.payload.id)
            :
              state.drink_id.filter(id => id != action.payload.id)
    },
    clear_cart: (state) => initialState
  } 
})

export const {add_to_cart, remove_item, clear_cart} = cartSlice.actions
