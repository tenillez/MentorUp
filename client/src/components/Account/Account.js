import React, { Component } from "react";
import { withRouter } from 'react-router';
import "./Account.css";
import axios from 'axios';
import { withUser } from '../../services/withUser';
import Goals from "../Goals";


class Account extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: " ",
            lastName: " ",
            username: " ",
            email: " ",
            location: " ",
            isMentor: " ",
            pairing: " ",
            linkedin: " ",
            note: "Glad we connected! Let's grab some coffee and chat!",
            accountID: this.props.match.params.userID
        }
        console.log(JSON.stringify(this.props.user));
    }
    componentDidMount() {
        this.findUser();
    }
    findUser() {
        axios.get("/api/user/" + this.state.accountID).then((res) => {
            console.log(res);
            this.setState(res.data);
            console.log(res.data.isMentor);
            if ((res.data.isMentor) === false) {
                this.setState({ isMentor: "mentee" })
            } else if (((res.data.isMentor) === true)) {
                this.setState({ isMentor: "mentor" })
            }
            console.log(this.state.isMentor)
        })
    }
    render() {
        return (
            <div>
                <div className="card welcome">
                    <h1>
                        Hi {this.state.firstName + " " + this.state.lastName}!
                    </h1>
                    <hr />
                    <div className="row">
                        <div className="col-lg-4">
                            <h3>Info</h3>
                            <hr />
                            <p>Username: {this.state.username} </p>
                            <p>Location: {this.state.location} </p>
                            <p>LinkedIn Profile: <a href={this.state.linkedin} rel='noopener noreferrer' target="_blank"> {this.state.linkedin}</a></p>
                        </div>
                        <div className="col-lg-4">
                            <h3>Mentor Up status</h3>
                            <hr />
                            <p>You are a {this.state.isMentor} </p>
                            <p>You are paired with: {this.state.pairing}</p>
                        </div>
                        <div className="col-lg-4">
                            <h3>Notes</h3>
                            <hr />
                            <p><i className="fa fa-sticky-note-o" aria-hidden="true"></i>{this.state.pairing} left you a note!</p>
                            <p className="note">{this.state.note}</p>
                        </div>
                    </div>
                </div>
                <div className="goalsContainer">
                    <Goals />
                </div>

                <div className="card video">
                    <div className="card-body">
                        <h1>Video Conference Options</h1>
                        <hr />
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card imgCard" id="zoom">
                                    <a href="https://www.zoom.us/" target="blank">
                                        <img src={require('./img/zoom.jpg')} alt="zoom" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card imgCard" id="hangouts">
                                    <a href="https://hangouts.google.com/" target="blank">
                                        <img src={require('./img/hangouts.png')} alt="google-hangouts" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card imgCard" id="skype">
                                    <a href="https://www.skype.com/en/get-skype/" target="blank">
                                        <img src={require('./img/skype.png')} alt="skype" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withUser(withRouter(Account));