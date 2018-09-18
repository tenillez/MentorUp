import React, { Component } from 'react';
import { withUser } from '../services/withUser';
import About from "../components/About";


class HomePage extends Component {
  state = {
    user: null
  }
  render() {
    const { user } = this.props;

    return (
      <div>
        <About />
        <div className="card">
          <div className="card-body">
            <h3>How this works</h3>
            <hr />
            <div className="row">
              <div className="col-sm-4">
                <div className="card">
                  <br />
                  <p><i className="fa fa-user-circle-o" aria-hidden="true"></i></p>
                  <p> First, sign up <a href="/create">here</a> or log in <a href="/login">here.</a></p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <br />
                  <p><i className="fa fa-question-circle" aria-hidden="true"></i></p>
                  {user ?
                    <p> Next, take our questionnaire <a href="/questionnaire">here.</a></p>
                    : <p>Next, take our questionnaire! <br /><a href="/login">Login</a> to view.</p>}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <br />
                  <p><i className="fa fa-handshake-o" aria-hidden="true"></i></p>
                  {user ?
                  <p> Meet your <a href="/result">mentor/mentee!</a></p>
                  : <p>Meet your mentor/mentee!</p> }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card why-card" id="why">
          <h3>Why choose us?</h3>
          <p>We have carefully crafted our question pool and have implemented a matching algorithm to ensure you and your mentor will be set up to succeed!  </p>
        </div>
      </div>

    );
  }
}

export default withUser(HomePage);
