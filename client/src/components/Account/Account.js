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
                <h1>
                    Account Information
                </h1>
                <p>Name: {this.state.firstName + " " + this.state.lastName} </p>

                <p>UserName: {this.state.username} </p>

                <p>Email: {this.state.email} </p>

                <p>Location: {this.state.location} </p>

                <h1>
                    Video Conference Options
                </h1>

                <img src={require('./img/zoom.jpg')} /> 

                <img src={require('./img/hangouts.png')} />

                <img src={require('./img/skype.png')} />

                <Goals />


            </div>
        )
    }
}

export default withUser(withRouter(Account));
