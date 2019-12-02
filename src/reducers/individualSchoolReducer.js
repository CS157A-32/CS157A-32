import {
  GET_INDIVIDUAL_SCHOOL,
  CLEAR_DATA,
  GET_SCHOOL_RECORD,
  GET_SCHOOL_CHAMPIONSHIPS,
  GET_SCHOOL_NBA
} from "../actions/types";

const initialState = {
  individualSchoolData: {},
  individualSchoolRecord: [],
  individualSchoolChampionships: [],
  individualSchoolNBA: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLEAR_DATA:
      return { ...state, individualSchoolData: action.payload };
    case GET_INDIVIDUAL_SCHOOL:
      return {
        ...state,
        individualSchoolData: action.payload
      };
    case GET_SCHOOL_RECORD:
      return {
        ...state,
        individualSchoolRecord: action.payload
      };
    case GET_SCHOOL_CHAMPIONSHIPS:
      return {
        ...state,
        individualSchoolChampionships: action.payload
      };
    case GET_SCHOOL_NBA:
      return {
        ...state,
        individualSchoolNBA: action.payload
      };
    default:
      return state;
  }
}
