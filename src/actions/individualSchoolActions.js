import {
  GET_SCHOOL_RECORD,
  GET_SCHOOL_CHAMPIONSHIPS,
  GET_SCHOOL_NBA
} from "./types";
import axios from "axios";

export const getSchoolRecord = school => dispatch => {
  axios
    .get("/api/schools/record", { params: school })
    .then(res => {
      dispatch({
        type: GET_SCHOOL_RECORD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getSchoolChampionships = school => dispatch => {
  axios
    .get("/api/schools/champGames", { params: school })
    .then(res => {
      dispatch({
        type: GET_SCHOOL_CHAMPIONSHIPS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getSchoolNBA = school => dispatch => {
  axios
    .get("/api/schools/allnba", { params: school })
    .then(res => {
      dispatch({
        type: GET_SCHOOL_NBA,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
