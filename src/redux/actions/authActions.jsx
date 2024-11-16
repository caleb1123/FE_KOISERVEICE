import axiosInstance from "../../services/axios";

// Action Types
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

//Action Login Types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Action Creators
export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};
export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};
export const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    payload: error,
  };
};

// Thunk Function
export const registerUser = (userData) => {
  return async (dispatch) => {
    dispatch(registerRequest());
    try {
      const response = await axiosInstance.post("/auth/register", userData);
      dispatch(registerSuccess(response.data));
    } catch (error) {
      dispatch(
        registerFailure(error.response ? error.response.data : "Network Error")
      );
    }
  };
};
