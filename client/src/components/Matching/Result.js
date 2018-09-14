// import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import PropTypes from 'prop-types';

// function Result(props) {

<<<<<<< HEAD
//   return (
//     <ReactCSSTransitionGroup
//       className="card result"
//       component="div"
//       transitionName="fade"
//       transitionEnterTimeout={800}
//       transitionLeaveTimeout={500}
//       transitionAppear
//       transitionAppearTimeout={500}
//     >
//       <div>
//         Your match is <strong>{props.quizResult}</strong>!
//       </div>
//     </ReactCSSTransitionGroup>
//   );
=======
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
      <strong>{props.quizResult}</strong>
      </div>
    </ReactCSSTransitionGroup>
  );
>>>>>>> 301b6371164d98994d07a6d655e2e813894f6bc4

// }

<<<<<<< HEAD
// Result.propTypes = {
//   quizResult: PropTypes.string.isRequired,
// };
=======
Result.propTypes = {
  quizResult: PropTypes.array.isRequired,
};
>>>>>>> 301b6371164d98994d07a6d655e2e813894f6bc4

// export default Result;
