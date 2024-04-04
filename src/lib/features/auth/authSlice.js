import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: ["admin", "timtimide"],
    password: ["modepass", "MODEPASS"],
    status: false,
  },

  reducers: {
    verify: (state, action) => {
      state.mail = action.payload;
    },
    registername: (state, action) => {
      state.name.push(action.payload);
    },
    registermdp: (state, action) => {
      state.password.push(action.payload);
    },
    logintru: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { verify, registername, registermdp, logintru } =
  authSlice.actions;

export default authSlice.reducer;
