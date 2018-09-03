import React, { Component } from "react";
import Question from "../components/Question";


class Questionnaire extends Component {

    render() {
        return (
            <div>
                <h1>Questionnaire</h1>
                <Question content="Are you ready to find an awesome mentor?" />
            </div>
        );
    }
}
export default Questionnaire;