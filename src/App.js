import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/landing_page/Landing";
import searchResultOverview from "./components/search_results/SearchResults";


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
          <Footer />

        </div>
      </Router>
      </Provider>

  );
}

export default App;
