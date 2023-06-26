import { configureStore } from "@reduxjs/toolkit";
import { blackjackReducer } from "./blackjackSlice";

export const store = configureStore({
  reducer: blackjackReducer,
});