import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  notificationCount: 0,
  loading: false,
  error: "",
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserNotificationCountLoading(state) {
      state.loading = true;
      state.error = "";
    },
    setUserNotificationCountSuccess(state, action) {
      state.notificationCount = action.payload;
      state.loading = false;
    },
    setUserNotificationCountFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setUserNotificationCountLoading,
  setUserNotificationCountSuccess,
  setUserNotificationCountFail, 
} = profile.actions;
export default profile.reducer;
