import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginButton from './LoginButton';
import LoginMenu from './LoginMenu';

import { update } from '../services/withUser';

const Navbar = (props) => {
  const { user } = props;
  const username = user ? user.username : null;
  const handleLogIn = () => {
    props.history.push('/login');
  };
  const handleLogOut = () => {
    axios.delete('/api/auth')
      .then(() => {
        // unsets the currently logged in user. all components wrapped in withUser
        // will be updated with a null user and rerender accordingly
        update(null);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand"><img height="35" width="35" src="./assets/logo.png" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/board">Community</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/chat">Chat</a>
            </li>

            {/* this shows login/logout based on if user is either logged in/out */}
            <li id="authinout">
              {user ?
                <LoginMenu username={username} onLogOut={handleLogOut} />
                : <LoginButton onClick={handleLogIn} />}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default withRouter(Navbar);
