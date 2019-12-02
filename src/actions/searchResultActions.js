import { GET_INDIVIDUAL_SCHOOL, CLEAR_DATA } from "./types";
import axios from "axios";

export const getIndividualSchoolResult = school => dispatch => {
  axios
    .get("/api/schools/oneSchool", { params: school })
    .then(res => {
      var schoolInfo = res.data;
      dispatch({
        type: GET_INDIVIDUAL_SCHOOL,
        payload: schoolInfo
      });
    })
    .catch(err => console.log(err));
};

export function clearData() {
  const initialState = {
    schoolName: "",
    schoolConference: "",
    schoolAttendance: 0,
    schoolTuition: 0,
    schoolMascot: "",
    cityName: "",
    state: "",
    population: 0,
    latitude: 0,
    longitude: 0,
    stadiumName: "",
    stadiumCapacity: 0,
    stadiumOnOffCampus: 0,
    headCoach: "",
    headCoachTitles: 0,
    headCoachWinPercentage: 0,
    logoImage: "",
    schoolImage: ""
  };
  return {
    type: CLEAR_DATA,
    payload: initialState
  };
}
