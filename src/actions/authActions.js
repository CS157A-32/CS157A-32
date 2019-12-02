import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken"; // attach token to header
import jwt_decode from "jwt-decode";

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // save to localStorage

      const token = res.data;

      console.log(token);

      // set token to local storage
      localStorage.setItem("jwtToken", token);
      // set token to auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);

      let decodedToken = {
        id: decoded.id,
        iat: decoded.iat,
        exp: decoded.exp,
        username: userData.username
      };

      console.log(decodedToken);
      // Set current user
      dispatch(setCurrentUser(decodedToken));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS
        // payload: err.data
      })
    );
};

// set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
