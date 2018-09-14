import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

function Result(props) {

  return (
    <ReactCSSTransitionGroup
      className="card result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        Your match is <strong>{props.quizResult}</strong>!
      </div>
    </ReactCSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: PropTypes.array.isRequired,
};

export default Result;
