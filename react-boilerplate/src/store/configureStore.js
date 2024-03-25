import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

store.subscribe(() => {
  const userState = store.getState().userReducer;
  const storeState = store.getState().selectedStore;
  localStorage.setItem("userState", JSON.stringify(userState));
  localStorage.setItem("storeState", JSON.stringify(storeState));
});

export default store;
