import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
} from "./types";

export const register = (
  first_name,
  last_name,
  username,
  password,
  re_password
) => async (dispatch) => {
  const body = JSON.stringify({
    first_name,
    last_name,
    username,
    password,
    re_password,
  });

  dispatch({
    type: SET_AUTH_LOADING,
  });

  try {
    // send to django endpoint
    const res = await fetch("/api/account/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    });

    if (res.status === 201) {
      dispatch({
        type: REGISTER_SUCCESS,
      });
    } else {
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }

  dispatch({
    type: REMOVE_AUTH_LOADING,
  });
};
