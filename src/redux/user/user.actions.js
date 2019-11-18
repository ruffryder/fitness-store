import * as types from "./user.types";

export const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START
});

export const facebookSignInStart = () => ({
  type: types.FACEBOOK_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: types.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: types.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: types.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: types.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: types.SIGN_OUT_START
});
export const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS
});
export const signOutFailure = () => ({
  type: types.SIGN_OUT_FAILURE
});

export const signUpStart = userCredentials => ({
  type: types.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: types.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: types.SIGN_UP_FAILURE,
  payload: error
});
