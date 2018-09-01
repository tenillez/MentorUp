import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footerDiv">
                <footer className="footer">
                    <a className="github" href="https://github.com/tenillez/MentorUp">GitHub</a>
                    <ul className="logos">
                        <li>
                    <a className="facebook" href="#"><img height="25" width="25" src="./assets/facebooklogo.png"/></a>
                    <a className="twitter" href="#"><img height="25" width="25" src="./assets/twitterlogo.jpg"/></a>
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Footer;