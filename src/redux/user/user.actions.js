import * as types from "./user.types";

export const setCurrentUser = user => {
  return {
    type: types.SET_CURRENT_USER,
    payload: user
  };
};
