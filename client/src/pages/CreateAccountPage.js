import axios from 'axios';
import React, { Component } from 'react';
class CreateAccountPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    password1: "",
    email: "",
    location: "",
    isMentor: "",
    error: ""
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();

    const { username, password, firstName, lastName, email, location, linkedin, photo, isMentor } = this.state;
    const { history } = this.props;

    this.setState({
      error: ""
    });

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

    if (!firstName || !lastName || !email || !location) {
      this.setState({
        error: 'All fields are required.'
      });
    }
    // post an auth request
    axios.post('/api/users', {
      username,
      password,
      firstName,
      lastName,
      email,
      location,
      linkedin,
      photo,
      isMentor
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
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="signupForm">
              <div className="title-container">
                <h2>Register</h2>
              </div>
              {error}
              {/* name */}
              <form onSubmit={this.handleLogin}>
                <div className="form-group">
                  <i className="fa fa-address-book" aria-hidden="true"></i>
                  <input
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChanged}
                    type="text-area"
                    placeholder="First Name"
                  ></input>
                </div>
                <div className="form-group">
                  <i className="fa fa-address-book-o" aria-hidden="true"></i>
                  <input
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChanged}
                    type="text"
                    placeholder="Last Name"
                  ></input>
                </div>
                {/* username */}
                <div className="form-group">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  <input
                    value={this.state.username}
                    name="username"
                    onChange={this.handleInputChanged}
                    type="text"
                    placeholder="Username"
                  ></input>
                </div>
                {/* passwords */}
                <div className="form-group">
                  <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                  <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChanged}
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>
                <div className="form-group">
                  <i className="fa fa-key" aria-hidden="true"></i>
                  <input
                    value={this.state.password1}
                    name="password1"
                    onChange={this.handleInputChanged}
                    type="password"
                    placeholder="Verify Password"
                  ></input>
                </div>
                {/* email */}
                <div className="form-group">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <input
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChanged}
                    type="email"
                    placeholder="Email"
                  ></input>
                </div>
                {/* location */}
                <div className="form-group">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <input
                    value={this.state.location}
                    name="location"
                    onChange={this.handleInputChanged}
                    type="location"
                    placeholder="City, State"
                  ></input>
                </div>
                {/* linkedin */}
                <div className="form-group">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  <input
                    value={this.state.linkedin}
                    name="linkedin"
                    onChange={this.handleInputChanged}
                    type="linkedin"
                    placeholder="www.linkedin.com/"
                  ></input>
                </div>
                {/* upload picture */}
                {/* <div className="form-group">
                  <i class="fa fa-camera-retro" aria-hidden="true"></i>
                  <input
                    value={this.state.photo}
                    name="form-control-file"
                    onChange={this.handleInputChanged}
                    type="file"
                  ></input>
                </div> */}
                {/* mentor */}
                <div className="form-group">
                  <i className="fa fa-handshake-o" aria-hidden="true"></i>
                  Are you interesting in being a Mentor or Mentee?
                <br />
                  <br />
                  <select
                    name="isMentor"
                    onChange={this.handleInputChanged}
                    className="form-select"
                    type="drop-down"
                    value={this.state.isMentor}
                  >
                    <option>Please Pick One</option>
                    <option value="true">Mentor</option>
                    <option value="false">Mentee</option>
                  </select>
                </div>

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
