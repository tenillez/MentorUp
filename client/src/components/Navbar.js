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
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><img height="35" width="35" src="../assets/logo.png" alt="logo"/></a>
        {/* this shows login/logout based on if user is either logged in/out */}
        <div className="nav-item">
          {user ?
            <LoginMenu username={username} onLogOut={handleLogOut} />
            : <LoginButton onClick={handleLogIn} />}
        </div>
    </nav>
  )
};

export default withRouter(Navbar);
