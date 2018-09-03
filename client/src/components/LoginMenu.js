import React from 'react';

const LoginMenu = (props) => {
  const { onLogOut, username } = props;
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {username}
      </button>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="/account:id">Account</a>
        <a className="dropdown-item" href="/board">Community</a>
        <a className="dropdown-item" href="/chat">Chat</a>
        <a className="dropdown-item" onClick={onLogOut}>Log out</a>
      </div>
    </div>
  )
};

export default LoginMenu;

