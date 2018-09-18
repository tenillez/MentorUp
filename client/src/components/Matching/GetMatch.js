import React, { Component } from 'react';
import axios from 'axios';
import { withUser } from '../../services/withUser';


class GetMatch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: " ",
            lastName: " ",
            username: " ",
            email: " ",
            location: " ",
            isMentor: " ",
            pairing: "Match not quite available yet",
            users: [],
            scores: [],
            accountID: this.props.user.id
        }
    };

    componentDidMount() {
        this.findUser();
    }
    findUser() {
        axios.get("/api/user/" + this.state.accountID).then((res) => {

            this.setState(res.data);
            console.log(res.data);
            this.setState({scores: res.data.userAnswers});
            console.log(this.state.scores);
        });
    }

    loadUsers = () => {
        axios.get('/api/users')
            .then(res => {

                let matchingScores = this.state.scores;
                let matchedName = "";
                let comparison = 1000;
                for (let i = 0; i < res.data.length; i++){
                    let difference = 0;
                    for (let j = 0; j < matchingScores.length; j++){
                        difference += Math.abs(res.data[i].scores[j] - matchingScores[j]);
                    }
                if (difference < comparison) {
                    matchedName = res.data[i].username;
                    console.log(matchedName);

                }
                // console.log(res.data[i].userAnswers);
                }
            });
    };


    render() {
        return (
            <div className="container thx">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="card">
                            <h3>Your match is: </h3>
                            <button className="btn btn-dark" onClick={this.loadUsers}>CLICK to find out!</button>
                            <p className="homelink"><a href='/'>(Go Back to Home)</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withUser(GetMatch);
