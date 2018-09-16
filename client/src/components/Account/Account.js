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
            this.setState(res.data)
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
                        </div>
                        <div className="col-lg-4">
                            <p>You are paired with: A great mentor</p>
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
                                <div className="card imgCard">
                                    <img src={require('./img/zoom.jpg')} />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card imgCard">
                                    <img src={require('./img/hangouts.png')} />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card imgCard">
                                    <img src={require('./img/skype.png')} />
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
