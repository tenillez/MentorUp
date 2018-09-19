import React from 'react';
import ResultContainer from "../components/Meetup/ResultContainer";

const Community = () => {
    return (
        <div className="container" id="commContainer">
            <div className="row">
                <div className="col-lg-7">
                    <h3>Community Posts</h3>
                    <p>Have a question, or an answer? Please contribute below</p>
                    <div className="card">
                        <div className="card-title">Coding Languages</div>
                        <div className="card-body">
                            <p>
                                I'm new to coding and have been learning on my own.  What languages do you recommend besides Javascript for beginners?
                        </p>
                            <div className="btn-group">
                                <button className="btn btn-dark"><i className="fa fa-plus" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">Looking to break into the business</div>
                        <div className="card-body">
                            <p>
                                What can I do to improve my chances of finding a tech job?
                        </p>
                            <div className="btn-group">
                                <button className="btn btn-dark"><i className="fa fa-plus" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">Ideas for new projects</div>
                        <div className="card-body">
                            <p>
                                Anyone interested in collaboration on new ideas?
                        </p>
                            <div className="btn-group">
                                <button className="btn btn-dark"><i className="fa fa-plus" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* break this out into a component */}
                <div className="col-lg-5">
                    <h3>Meetups</h3>
                    <p>Click a group below to see their upcoming events.</p>
                    <button className="btn btn-dark" value="Women-Who-Code-Austin">Women Who Code Austin</button>
                    <button className="btn btn-dark" value="austinwomentech">Austin Women in Tech</button>
                    <button className="btn btn-dark" value="ChickTech-Austin">ChickTech ATX</button>
                    <button className="btn btn-dark" value="Ladies-That-UX-Austin">Ladies That UX Austin</button>
                    <button className="btn btn-dark" value="IEEE-Women-in-Engineering-Book-Club">Women in Engineering Book Club</button>
                    <div className="card meetup-result">
                        <ResultContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (Community);