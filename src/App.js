import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/landing_page/Landing";
import searchResultOverview from "./components/search_results/SearchResults";
import AboutUs from "./components/about_page/AboutUs";
import Login from "./components/Login/Login";
import indivSchool from "./components/indiv-school/indivSchool";
import indivSchoolChampionships from "./components/indiv-school/indivSchoolChampionships";
import indivSchoolRecord from "./components/indiv-school/indivSchoolRecord";
import indivSchoolNBA from "./components/indiv-school/indivSchoolNBA";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/searchResultOverview"
            component={searchResultOverview}
          />
          <Route exact path="/indivSchool" component={indivSchool} />
          <Route
            exact
            path="/indivSchoolChamp"
            component={indivSchoolChampionships}
          />
          <Route
            exact
            path="/indivSchoolRecord"
            component={indivSchoolRecord}
          />
          {<Route exact path="/indivSchoolNBA" component={indivSchoolNBA} />}
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/login" component={Login} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
export default App;
