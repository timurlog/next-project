import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: { value: [] },
  reducers: {
    addId: (state, action) => {
      state.value.push(action.payload);
    },
    delAll: (state) => {
      state.value = [];
    },
    popId: (state, action) => {
      const index = state.value.indexOf(action.payload);
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const { addId, popId, delAll } = favoriteSlice.actions;
export default favoriteSlice.reducer;
