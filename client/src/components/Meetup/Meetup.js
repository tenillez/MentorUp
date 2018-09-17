import React from "react";
import { render } from "react-dom";
import Meetups from "react-meetup-meetups";

export default class Meetup extends React.Component {
    
}
const styles = {
    fontFamily: "sans-serif",
    textAlign: "left"
  };
  
const apiKey = "1ce5144155b5f7b4d775c446d374e78";
const meetupsIds = [
  254417604,
  253925649
  
];

const fmtTime = time => new Date(time).toISOString().substring(0, 10);

const Meetup = ({ time, name, event_url }) => (
  <div>
    {fmtTime(time)} : <a href={event_url}>{name}</a>
  </div>
);

const renderMeetups = results => {
  return results.map(Meetup);
};

const App = () => (
  <div style={styles}>
    <Meetups
      apiKey={apiKey}
      meetupsIds={meetupsIds}
      render={renderMeetups}
      loading={() => <div>Loading...</div>}
    />
  </div>
);

// render(<App />, document.getElementById("meetup"));

// export default Meetup;


// render(<Meetup />, document.querySelector("#meetup")) 
