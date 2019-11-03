import {
  GET_SCHOOL_RECORD,
  GET_SCHOOL_CHAMPIONSHIPS,
  GET_SCHOOL_NBA
} from "./types";
import axios from "axios";

export const getSchoolRecord = school => dispatch => {
  axios
    .get("/api/school/individualRecord", { params: school })
    .then(res => {
      var schoolRecord = res.data;
      dispatch({
        type: GET_SCHOOL_RECORD,
        payload: schoolRecord
      });
    })
    .catch(err => console.log(err));
};

export const getSchoolChampionships = school => dispatch => {
  axios
    .get("/api/school/individualChampionships", { params: school })
    .then(res => {
      var schoolChampionships = res.data;
      dispatch({
        type: GET_SCHOOL_CHAMPIONSHIPS,
        payload: schoolChampionships
      });
    })
    .catch(err => console.log(err));
};

export const getSchoolNBA = school => dispatch => {
  axios
    .get("/api/school/individualNBA", { params: school })
    .then(res => {
      var schoolNBA = res.data;
      dispatch({
        type: GET_SCHOOL_NBA,
        payload: schoolNBA
      });
    })
    .catch(err => console.log(err));
};
