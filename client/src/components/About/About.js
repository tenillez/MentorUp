import React from "react";
import "./About.css";


const About = (props) => {
  
    return (
        <div>
            <div className="jumbotron">
                <h1>Mentor Up</h1>
                <p className="lead">Mentorship pairing geared to further women in tech</p>
                {/* <a className="btn btn-light btn" role="button">Learn More</a> */}

                <div className="container">
                <h3>Why mentorship?</h3>
                    <p>Mentors provide insight, support, and promote engagement within a company or career. 
                    </p>
                    <p>We believe mentors and mentorship are valuable, but only about half of women in the workforce participate. This percentage is even less for women in the tech industry. Check out what Forbes has to say
                    <a href="https://www.forbes.com/sites/margiewarrell/2017/06/24/women-mentoring/#65a6be9d22db" target="_blank"> here</a>.
                    </p>
                    <p>
                        We'd like to change that trend.
                    </p>
                    <a className="btn btn-dark btn" href="#why" role="button">Learn More</a>
                </div>
            </div>
            {/* <div className="card why-card" id="why">
                <h3>Why choose us?</h3>
                    <p>We have carefully crafted our question pool and have implemented a matching algorithm to ensure you and your mentor will be set up to succeed!  </p>
            </div> */}
            {/* <div id="chat-icon"><i className="fa fa-comments" aria-hidden="true"></i></div> */}
        </div>
    )
}

export default About;
