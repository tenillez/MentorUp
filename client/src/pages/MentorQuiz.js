import axios from 'axios';
import React, { Component } from 'react';

class MentorQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
            q8: "",
            q9: "",
            q10: "",
            error: "",
            accountID: this.props.match.params.userID
        }
    }
    componentDidMount(){
        this.findUser();
    }
    findUser() {
        axios.get("/api/user/" + this.state.accountID).then((res) => {
            console.log(res);
            this.setState(res.data)
        });
    };

    handleInputChanged = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleQuizInput = (event) => {
        event.preventDefault();

        const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } = this.state;
        const { history } = this.props;

        this.setState({
            error: ""
        })

        if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10) {
            this.setState({
                error: 'Please answer all the questions before continuing.'
            });
            return;
        }   

        axios.post('/api/user/' + this.state.accountID, {
            q1, q2, q3, q4, q5, q6, q7, q8, q9, q10
        })
        .then(user => {
            history.push()
        })
}

render() {
    return (
        <div className="container">
     
      <form onSubmit={this.handleSubmit}>
        <p>How many years of experience do you have?</p>
        
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="A"
                checked={this.state.q1 === "A"}
                onChange={this.handleInputChanged}
              />
              0-3 years
            </label>
          </li>
          
          <li>
            <label>
              <input
                type="radio"
                value="B"
                checked={this.state.q1 === "B"}
                onChange={this.handleInputChanged}
              />
              3-5 years
            </label>
          </li>
  
          <li>
            <label>
              <input
                type="radio"
                value="C"
                checked={this.state.q1 === "C"}
                onChange={this.handleChange}
              />
              5-10 years
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="D"
                checked={this.state.q1 === "D"}
                onChange={this.handleChange}
              />
              10+ years
            </label>
          </li>

        </ul>
  
        <button type="submit">Make your choice</button>
      </form>
      </div>
    );
  }
}
export default(MentorQuiz);