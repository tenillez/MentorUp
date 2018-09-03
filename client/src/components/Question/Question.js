import React from 'react';

function Question(props) {
    return (
        <p className="question">{props.content}</p>
    );
}

// Question.propTypes = {
//     content: React.PropTypes.string.isRequired
// };

export default Question;