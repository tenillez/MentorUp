// import React from "react";
// import { render } from "react-dom";
// import Meetups from "react-meetup-meetups";

// // const ResultList = props => (
// //   <ul className="list-group">
// //     {props.results.map(result => (
// //       <li className="list-group-item" key={result.id}>
// //         <img
// //           alt={result.title}
// //           className="img-fluid"
// //           src={result.images.original.url}
// //         />
// //       </li>
// //     ))}
// //   </ul>
// // );



// const apiKey = "1ce5144155b5f7b4d775c446d374e78";
// const meetupsIds = [
//   254417604,
//   253925649
  
// ];

// const fmtTime = time => new Date(time).toISOString().substring(0, 10);

// const Meetup = ({ time, name, event_url }) => (
//   <div>
//     {fmtTime(time)} : <a href={event_url}>{name}</a>
//   </div>
// );

// const renderMeetups = results => {
//   return results.map(Meetup);
// };

// const App = () => (
//   <div style={styles}>
//     <Meetups
//       apiKey={apiKey}
//       meetupsIds={meetupsIds}
//       render={renderMeetups}
//       loading={() => <div>Loading...</div>}
//     />
//   </div>
// );

// render(<App />, document.getElementById("root"));

// export default Meetup;