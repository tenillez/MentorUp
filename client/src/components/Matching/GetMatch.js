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
            pairing: "",
            isMatched: "",
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
            this.setState({ scores: res.data.userAnswers });
            console.log(this.state.scores);
        });
    }

    // need to separate get mentees, get mentors hmmm
    getMentor = () => {
        axios.get('/api/mentors')
            .then(res => {
                let closestMatch = {
                    name: "",
                    comparison: 1000
                }
                let matchingScores = this.state.scores;

                let difference;
                for (let i = 0; i < res.data.length; i++) {
                    difference = 0;
                    for (let j = 0; j < matchingScores.length; j++) {
                        difference += Math.abs(res.data[i].userAnswers[j] - matchingScores[j]);
                    }
                    if (difference <= closestMatch.comparison) {

                        closestMatch = res.data[i].username;
                        this.setState({ pairing: closestMatch });
                    }
                }
          this.storeMatch();
              
            });
    };

    getMentee = () => {
        axios.get('/api/mentees')
            .then(res => {
                let closestMatch = {
                    name: "",
                    comparison: 1000
                }
                let matchingScores = this.state.scores;

                let difference;
                for (let i = 0; i < res.data.length; i++) {
                    difference = 0;
                    for (let j = 0; j < matchingScores.length; j++) {
                        difference += Math.abs(res.data[i].userAnswers[j] - matchingScores[j]);
                    }
                    if (difference <= closestMatch.comparison) {

                        closestMatch = res.data[i].username;
                        this.setState({ pairing: closestMatch });
                    }
                }
                    this.storeMatch();
    
            });

    };

    storeMatch() {
        let id = (this.props.user.id);
        console.log(this.state.pairing)

        axios.put('/api/user/' + id, {
            pairing: this.state.pairing,
            isMatched: true
        })
            .then(res => {
                console.log(res.data.pairing);
            })
            .catch(err => {
                console.log(err)
            });
    };


    render() {
        return (
            <div className="container thx">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="card">
                            <h2>Thank you for taking the questionnaire.</h2>
                            <br />
                            <h3>Your match is {this.state.pairing}</h3>

                            {this.state.isMentor === false ? <button className="btn btn-dark" onClick={this.getMentor}>Get Mentor!</button>
                                : <button className="btn btn-dark" onClick={this.getMentee}>Get Mentee!</button>}
                            <p className="homelink"><a href='/'>(Go Back to Home)</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withUser(GetMatch);
