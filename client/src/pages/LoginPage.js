import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { update } from '../services/withUser';

class LoginPage extends Component {
  state = {
    username: null,
    password: null
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

    // post an auth request
    axios.post('/api/auth', {
      username,
      password
    })
      .then(user => {
        // if the response is successful, update the current user and redirect to the home page
        update(user.data);
        history.push('/');
      })
      .catch(err => {
        // an error occured, so let's record the error in our state so we can display it in render
        // if the error response status code is 401, it's an invalid username or password.
        // if it's any other status code, there's some other unhandled error so we'll just show
        // the generic message.
        this.setState({
          error: err.response.status === 401 ? 'Invalid username or password.' : err.message
        });
      });
  }
  render() {
    const { error } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="signinForm">
              <form onSubmit={this.handleLogin}>
                <h3>Login Here</h3>
                <hr />
                {error &&
                  <div>
                    {error}
                  </div>
                }
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
                  <button className="btn" type="submit" onClick={this.handleLogin}>Login</button>
                  <br />
                  <br />
                <Link to="/create">
                    <button className="btn" type="submit">Register</button>
                </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
