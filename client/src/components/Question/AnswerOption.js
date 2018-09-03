import React from 'react';
import PropTypes from 'prop-types';

const AnswerOption = props => {
    return (
    <div>
        <li>
            <input
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                name={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
                type="radio"
            />
            <label className="radioCustomLabel" htmlFor={props.answerType}>
            {props.answerContent}
            </label>    
        </li>
    </div>
    )
}

AnswerOption.PropTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}

export default AnswerOption;