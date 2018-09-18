import React, { Component } from 'react';
import axios from 'axios';
import { withUser } from '../../services/withUser';


class Result extends Component {
  state = {
    users: []
  };

  // componentDidMount() {
  //   this.loadUsers();
  // }

  // loadUsers = () => {
  //   axios.get({})
  // })
  // }
  render() {
    return (
      <div className="container thx">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="card">
            <h1>{this.state.firstName}</h1>
              <h3>Thank you for taking the questionnaire.</h3>
              <button className="btn btn-dark" onClick={this.getMatch}>Meet your mentor/mentee!</button>
              <p className="homelink"><a href='/'>(Go Back to Home)</a></p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withUser(Result);
