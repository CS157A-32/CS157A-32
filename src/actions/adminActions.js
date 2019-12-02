import { CREATE_PLAYER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken"; // attach token to header
import jwt_decode from "jwt-decode";

// create a new nba player
export const createPlayer = playerInfo => dispatch => {
  console.log("Action:");
  console.log(playerInfo);

  axios
    .post("/api/nbaplayers/addPlayer", playerInfo)
    .then(res => {
      dispatch({
        type: CREATE_PLAYER
        // payload: res.data
      });
    })
    .catch(err => console.log(err));
};
