import React from 'react';

const LoginMenu = (props) => {
  const { onLogOut, username, id } = props;
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {username}
      </button>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="/"><i className="fa fa-home" aria-hidden="true"></i>Home</a>
        <a className="dropdown-item" href={ "/user/" + id }><i className="fa fa-user-circle" aria-hidden="true"></i>Account</a>
        <a className="dropdown-item" href="/board"><i className="fa fa-thumb-tack" aria-hidden="true"></i>Community</a>
        <a className="dropdown-item" href="/chat"><i className="fa fa-comments" aria-hidden="true"></i>Chat</a>
        <a className="dropdown-item" href="/" onClick={onLogOut}><i className="fa fa-sign-out" aria-hidden="true"></i>Log out</a>
      </div>
    </div>
  )
};

export default LoginMenu;

