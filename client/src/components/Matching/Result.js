import React from 'react';

const Result = () => {
    return (
      <div className="container thx">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="card">
              <h6>Thank you for taking the questionnaire.</h6>
              <button className="btn btn-dark"><a href="/getmatch">Meet your Mentor!</a></button>
              <button className="btn btn-dark"><a href="/">Return to home page</a></button>
            </div>
          </div>
        </div>
      </div>

    )
  }


export default (Result);