import React, { Component } from "react";

class Schools extends Component {
  state = {
    schools: []
  };

  componentDidMount() {
    fetch("/api/schools")
      .then(res => res.json())
      .then(resultSchools =>
        this.setState({ schools: resultSchools }, () =>
          console.log("Schools found...", resultSchools)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>College Basketball Programs</h2>
        <ul>
          {this.state.schools.map(school => (
            <li key={school.id}>
              {" "}
              {school.name} {school.conference}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Schools;
