import {
  GET_INDIVIDUAL_SCHOOL,
  CLEAR_DATA,
  GET_SCHOOL_RECORD,
  GET_SCHOOL_CHAMPIONSHIPS,
  GET_SCHOOL_NBA
} from "../actions/types";

const initialState = {
  individualSchoolData: {
    schoolName: "San Jose State University",
    schoolConference: "Mountain West",
    schoolAttendance: 31000,
    schoolTuition: 10000,
    schoolMascot: "Spartans",
    cityName: "San Jose",
    state: "California",
    population: 1240000,
    latitude: 37.3021,
    longitude: -121.8489,
    stadiumName: "CEFCU Stadium",
    stadiumCapacity: 24000,
    stadiumOnOffCampus: 0,
    headCoach: "Mr. Bean",
    headCoachTitles: 3,
    headCoachWinPercentage: 0.4,
    numberOfChampionships: 3,
    lastYearRecord: "63-42",
    nbaDrafted: 3,
    logoImage: "http://content.sportslogos.net/logos/34/828/full/2616.png",
    schoolImage:
      "https://sjsuspartans.com/images/2019/9/10/GLH23677.JPG?width=1416&height=797&mode=crop&quality=80"
  },
  individualSchoolRecord: {
    record: [
      { year: "2018/2019", wins: 22, losses: 55 },
      { year: "2017/2018", wins: 13, losses: 75 },
      { year: "2016/2017", wins: 23, losses: 55 },
      { year: "2015/2016", wins: 43, losses: 45 },
      { year: "2014/2015", wins: 23, losses: 65 }
    ],
    schoolName: "San Jose State University",
    schoolConference: "Mountain West",
    schoolMascot: "Spartans",
    cityName: "San Jose",
    state: "California",
    logoImage: "http://content.sportslogos.net/logos/34/828/full/2616.png"
  },
  individualSchoolChampionships: {
    championship: [
      { title: "NCAA", year: "2015", opponent: "UCLA", score: "76-134" },
      {
        title: "NCAA",
        year: "2012",
        opponent: "Ohio State",
        score: "99-102"
      },
      {
        title: "Mountain West",
        year: "2012",
        opponent: "Duke",
        score: "100-102"
      },
      { title: "NCAA", year: "2005", opponent: "UCLA", score: "76-82" },
      {
        title: "Mountain West",
        year: "2005",
        opponent: "Duke",
        score: "79-93"
      }
    ],
    schoolName: "San Jose State University",
    schoolConference: "Mountain West",
    schoolMascot: "Spartans",
    cityName: "San Jose",
    state: "California",
    logoImage: "http://content.sportslogos.net/logos/34/828/full/2616.png"
  },
  individualSchoolNBA: {}
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
