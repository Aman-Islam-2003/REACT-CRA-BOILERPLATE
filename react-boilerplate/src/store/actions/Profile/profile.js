import {
  setUserNotificationCountLoading,
  setUserNotificationCountSuccess,
  setUserNotificationCountFail,
} from "store/reducers/Profile/profile";


export const updateUserNotificationCount = (count) => async (dispatch) => {
  try {
    dispatch(setUserNotificationCountLoading());
    dispatch(setUserNotificationCountSuccess(count));
  } catch (error) {
    console.error(error);
    dispatch(
      setUserNotificationCountFail("Failed to set user notification count ")
    );
  }
};
