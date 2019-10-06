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
        <table>
          <tr>
            <th>University</th>
            <th>City</th>
            <th>Conference</th>
          </tr>
          
          {this.state.schools.map(school => (
              <tr key={school.id}>
                <td>{school.name}</td>
                <td>{school.city}</td>
                <td>{school.conference}</td>
              </tr>                
          ))}
        </table>

      </div>
    );
  }
}

export default Schools;
