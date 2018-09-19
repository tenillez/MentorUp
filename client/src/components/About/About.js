import React from "react";
import "./About.css";


const About = (props) => {
  
    return (
        <div>
            <div className="jumbotron">
                <h1>Mentor Up</h1>
                <p className="lead">Mentorship pairing geared to empowering women in tech.</p>
                {/* <a className="btn btn-light btn" role="button">Learn More</a> */}

                <div className="container">
                <h3>Why mentorship?</h3>
                    <p>Mentors provide insight, support, and promote engagement within a company or career. 
                    </p>
                    <p>We believe mentors and mentorship are valuable, but only about half of women in the workforce participate. This percentage is even less for women in the tech industry. Check out what Forbes has to say
                    <a href="https://www.forbes.com/sites/margiewarrell/2017/06/24/women-mentoring/#65a6be9d22db" rel='noopener noreferrer' target="_blank"> here</a>.
                    </p>
                    <p>
                        We'd like to change that trend.
                    </p>
                    <a className="btn btn-dark btn" href="#why" role="button">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default About;
