import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userSliceInt {
  name: string,
  email: string,
  password: string
}

const userinfo = localStorage.getItem('user')
const initialState: userSliceInt = (userinfo) ? 
    JSON.parse(userinfo) 
  :
    {
      name: '',
      email: '',
      password: ''
    }


//TODO: some reducers are missing
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set_user: (state, action: PayloadAction<userSliceInt>) => action.payload,
    clear_user: (state) => initialState
  } 
})

export const {set_user, clear_user} = userSlice.actions
