import { configureStore } from "@reduxjs/toolkit";

import darkmodeSlice from "./features/darkmode/darkmodeSlice";
import showmenuSlice from "./features/showmenu/showmenuSlice";
import authSlice from "./features/auth/authSlice";
import contentSlice from "./features/content/contentSlice";
import favoriteSlice from "./features/favorite/favoriteSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      darkmode: darkmodeSlice,
      showmenu: showmenuSlice,
      auth: authSlice,
      content: contentSlice,
      favorite: favoriteSlice,
    },
  });
};
