import React, { Component } from "react";
import {withRouter} from 'react-router';
import "./Account.css";
import axios from 'axios';
import { withUser } from '../../services/withUser';



class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountID : this.props.match.params.userID
        }
    }


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
        })
    }

    



    

    
    render() {
        return (
            <div>
            <h1>
                Account Page
            </h1>
            <p>User: { this.props.match.params.userID } </p>

            <div id="accountGoals">
                Goals dawg
            </div>
            

            </div>
        )
    }
}

export default withUser(withRouter(Account));
