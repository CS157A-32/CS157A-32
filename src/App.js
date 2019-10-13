import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Schools from "./components/Schools";
import AboutUs from "./components/about_page/AboutUs";

function App() {
  return (
    <Router>

    <div className="App">
      
      <Route path="/" component={Schools} />
      <Route path="/about" component={AboutUs} />
    </div>

    </Router>
  );
}
export default App;