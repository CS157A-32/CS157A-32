import { SET_QUERY, SAVE_QUERY, SEARCH_LOADING } from "./types";
import axios from "axios";

export const submitQuery = newQuery => dispatch => {
  dispatch(setSearchLoading());
  axios
    .get("/api/schools/search", { params: newQuery })
    // if success then res.data will be the product object we looking for
    .then(res => {
      dispatch({
        type: SET_QUERY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const saveQuery = newQuery => dispatch => {
  dispatch({
    type: SAVE_QUERY,
    payload: newQuery
  });
};

export const setSearchLoading = () => {
  return {
    type: SEARCH_LOADING
  };
};
