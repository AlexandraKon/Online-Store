import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name:null,
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.name = null;
    },
    setUserName(state, action){
      state.name = action.payload.name;
    }
  },
});

export const { actions } = userSlice;
export const userReducer = userSlice.reducer;
