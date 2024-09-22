import { configureStore } from "@reduxjs/toolkit";
import { modalStateSlice } from "./modalStateSlice";

export const store = configureStore({
  reducer: {
    isOpen: modalStateSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
