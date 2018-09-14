import React, { Component } from "react";
import {withRouter} from 'react-router';
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
            accountID : this.props.match.params.userID
        }
        console.log(JSON.stringify(this.props.user));
    }
<<<<<<< HEAD


    componentWillMount() {
        axios.get("/api/user/" + this.state.accountID).then((res) =>{
            console.log(res.data);
            this.setState({userInfo: res})
            
        })

        axios.get("/api/stuff").then((res) => {
            console.log(res);
        })

        axios.get("/api/tableTest").then((res) => {
            console.log(res);
=======
    componentDidMount(){
        this.findUser();
    }
    findUser() {
        axios.get("/api/user/" + this.state.accountID).then((res) =>{
            console.log(res);
            this.setState(res.data)
>>>>>>> 301b6371164d98994d07a6d655e2e813894f6bc4
        })
    }

    



    

    
    render() {
        return (
            <div>
            <h1>
                Account Page
            </h1>
            <p>Name: { this.state.firstName + " " + this.state.lastName } </p>
            <br></br>
            <p>UserName: { this.state.username } </p>
            <br></br>
            <p>Email: { this.state.email } </p>
            <br></br>
            <p>Location: { this.state.location } </p>
            <br></br>
            <Goals 
            
            
            />

            </div>
        )
    }
}

export default withUser(withRouter(Account));
