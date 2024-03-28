import { configureStore } from "@reduxjs/toolkit";

import darkmodeSlice from "./features/darkmode/darkmodeSlice";
import showmenuSlice from "./features/showmenu/showmenuSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      darkmode: darkmodeSlice,
      showmenu: showmenuSlice,
    },
  });
};
