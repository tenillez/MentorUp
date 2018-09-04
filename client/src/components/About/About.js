import React, { Component } from "react";
import "./About.css";

const About = (props) => {
    const { user } = props;

    return (
        <div className="jumbotron">
            <h1 className="display-4">Mentor Up</h1>
            <p className="lead">Mentorship app designed to further women in tech</p>
            <hr></hr>
            <p>
                Lorem ipsum dolor amet street art selvage organic before they sold out drinking vinegar readymade shoreditch iPhone seitan shaman. Farm-to-table williamsburg freegan copper mug. Stumptown heirloom snackwave jean shorts tote bag thundercats iPhone chambray migas tbh YOLO woke. Single-origin coffee live-edge selfies biodiesel church-key. Live-edge unicorn swag chillwave shaman biodiesel pickled blog paleo. Pop-up kogi synth, fingerstache semiotics pok pok street art blog adaptogen.
                </p>
            <a className="btn btn-dark btn" href="#about" role="button">Learn More</a>

            <div className="container">
                <p>
                    Lorem ipsum dolor amet street art selvage organic before they sold out drinking vinegar readymade shoreditch iPhone seitan shaman. Farm-to-table williamsburg freegan copper mug. Stumptown heirloom snackwave jean shorts tote bag thundercats iPhone chambray migas tbh YOLO woke. Single-origin coffee live-edge selfies biodiesel church-key. Live-edge unicorn swag chillwave shaman biodiesel pickled blog paleo. Pop-up kogi synth, fingerstache semiotics pok pok street art blog adaptogen.
                    </p>
                <p>
                    Yr bespoke lo-fi shaman drinking vinegar tofu sriracha. Disrupt raclette street art pok pok fam shoreditch. La croix cold-pressed pabst, glossier knausgaard single-origin coffee activated charcoal helvetica man bun. Migas whatever pour-over organic brunch cloud bread. Put a bird on it affogato lyft cardigan humblebrag, banjo hexagon synth pinterest vice pork belly post-ironic williamsburg authentic banh mi. Raclette shaman biodiesel ugh chillwave meditation hexagon etsy dreamcatcher subway tile asymmetrical.
                    </p>
                    <a className="btn btn-dark btn" href="/questionnaire" role="button">Get Started</a>
            </div>
            <div className="container">
                <div id="about">
                    some random stuff here blah blah blah blah columns and stuff
                </div>
            </div>
        </div>
    )
}

export default About;