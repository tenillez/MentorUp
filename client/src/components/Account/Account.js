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
                        Hi {this.state.firstName}!
                        {/* + " " + this.state.lastName}! */}
                    </h1>
                    <hr />
                    <div className="row">
                        <div className="col-lg-8">
                            <p>Username: {this.state.username} </p>

                            <p>Email: {this.state.email} </p>

                            <p>Location: {this.state.location} </p>
                            <a href={this.state.linkedin} rel='noopener noreferrer' target="_blank">LinkedIn Profile: {this.state.linkedin}</a>
                        </div>
                        <div className="col-lg-4">
                            <p>You are a {this.state.isMentor} </p>

                            <p>You are paired with: {this.state.pairing}</p>
                            <h5 className="alert">{this.state.pairing} left you a note!</h5>

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
                                    <img src={require('./img/zoom.jpg')} alt="zoom" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card imgCard" id="hangouts">
                                    <img src={require('./img/hangouts.png')} alt="google-hangouts" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card imgCard" id="skype">
                                    <img src={require('./img/skype.png')} alt="skype" />
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