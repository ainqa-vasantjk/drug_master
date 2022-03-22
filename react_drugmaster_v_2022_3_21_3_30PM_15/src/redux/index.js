import { configureStore } from "@reduxjs/toolkit";
import { rootReducer as reducer } from "drugmaster_v_dbinder";

export const store = configureStore({
  reducer,
});
