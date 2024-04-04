import { createSlice } from "@reduxjs/toolkit";

const account = [
  {
    name: "admin",
    password: "modepass",
  },
];

const authSlice = createSlice({
  name: "auth",
  initialState: { value: false },
  reducers: {
    connect: (state) => {
      state.value = true;
    },
    disconnect: (state) => {
      state.value = false;
    },
  },
});

export const { connect, disconnect } = authSlice.actions;
export default authSlice.reducer;
