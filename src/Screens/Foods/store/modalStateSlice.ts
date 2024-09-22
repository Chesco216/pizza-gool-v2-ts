import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
}

export const modalStateSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    oc_modal: (state, action) => action.payload,
  }
})

export const { oc_modal } = modalStateSlice.actions
