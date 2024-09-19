import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./switchthemeRedux";

const store = configureStore({
  reducer: themeReducer,
});

export default store;
