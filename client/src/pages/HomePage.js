import axios from 'axios';
import React, { Component } from 'react';
import { withUser } from '../services/withUser';
import About from "../components/About";

class HomePage extends Component {
  state = {
    home: null
  }
  componentDidMount() {
    // only try loading stuff if the user is logged in.
    if (!this.props.user) {
      return;
    }

    axios.get('/api/home')
      .then(res => {
        this.setState({
          home: res.data
        });
      })
      .catch(err => {
        // if we got an error, we'll just log it and set stuff to an empty array
        console.log(err);
        this.setState({
          home: []
        });
      });
  }
  render() {
    // get the user prop from props
    const { user } = this.props;
    // const { stuff } = this.state; // get stuff from state

    return (
      <div>
        {/* {user &&
          <div className="loggedinmessage">
            Welcome back, {user.username}!
          </div>
        }
        {!user &&
          <div className="loggedinmessage">Please login or register to get started!</div>
        } */}
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
                    : <p>Please <a href="/login">login</a> to view questionnaire.</p>}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <br />
                  <p><i className="fa fa-handshake-o" aria-hidden="true"></i></p>
                  <p> Meet your mentor!</p>
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

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(HomePage);
