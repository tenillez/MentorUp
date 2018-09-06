import axios from 'axios';
import React, { Component } from 'react';
import Footer from "../components/Footer";


class CreateAccountPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    password1: "",
    email: "",
    location: "",
    years: "",
    mentor: "",
    error: ""
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

    // clear any previous errors so we don't confuse the user
    this.setState({
      error: ""
    });

    // check to make sure they've entered a username and password.
    // this is very poor validation, and there are better ways
    // to do this in react, but this will suffice for the example
    if (!username || !password) {
      this.setState({
        error: 'A username and password is required.'
      });
      return;
    }

    if (this.state.password !== this.state.password1) {
      this.setState({
        error: 'Password fields do not match.'
      });
      return;
    }

    // post an auth request
    axios.post('/api/users', {
      username,
      password
    })
      .then(user => {
        // if the response is successful, make them log in
        history.push('/login');
      })
      .catch(err => {

        this.setState({
          error: err.response.data.message || err.message
        });
      });
  }
  render() {
    const { error } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="signupForm">
              <h3>Please create an account to begin.</h3>
              <p>
                <hr />
              </p>
              { error }
              <form onSubmit={this.handleLogin}>
                <div className="form-group">
                  <input
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChanged}
                    type="text-area"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChanged}
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.username}
                    name="username"
                    onChange={this.handleInputChanged}
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChanged}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.password1}
                    name="password1"
                    onChange={this.handleInputChanged}
                    type="password"
                    placeholder="Verify Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChanged}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.location}
                    name="location"
                    onChange={this.handleInputChanged}
                    type="location"
                    placeholder="City, State"
                  />
                </div>
                {/* <div className="form-group">
                  <input
                    value={this.state.years}
                    name="years"
                    onChange={this.handleInputChanged}
                    type="years"
                    placeholder="Years of experience"
                  />
                </div>
                <div className="form-group">
                <h4>Interested in becoming a mentor?</h4>
                  <input
                    value={this.state.mentor}
                    name="mentor"
                    onChange={this.handleInputChanged}
                    type="checkbox"
                  />
                </div>
                <br />
                <div className="form-group" id="pic"><h4>Add a Profile Picture</h4>
                  <input
                    value={this.state.picture}
                    name="form-control-file"
                    onChange={this.handleInputChanged}
                    type="file"
                  />
                </div> */}
                <div className="form-group">
                  <button className="btn btn-secondary" type="submit" onClick={this.handleFormSubmit}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      
    
     

      </div>
    );
  }
}

export default CreateAccountPage;
