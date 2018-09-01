import React, {Component} from "react";

class Navbar extends Component {
    render(){
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand"><img height="35" width="35" src="./assets/logo.png"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Mentors
                        </a>
                    </li>
                </ul>
                <div className="nav-item" id="signIn"/>
                    <a className="nav-link" href="/signIn">Sign In</a>   
            </div>
                </nav>
            )
        }
    }

export default Navbar;