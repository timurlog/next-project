import { configureStore } from "@reduxjs/toolkit";

import darkmodeSlice from "./features/darkmode/darkmodeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      darkmode: darkmodeSlice,
    },
  });
};
