// import React, { Component } from "react";
// import Search from "./Search";
// import ResultList from "./ResultList";
// import API from "../../utils/API";

// class ResultContainer extends Component {
//   state = {
//     search: "",
//     results: []
//   };

//   // When this component mounts, search the Meetup API for pictures of kittens
//   componentDidMount() {
//     this.searchMeetup("Women-Who-Code");
//   }

//   searchMeetup = query => {
//     API.search(query)
//       .then(res => this.setState({ results: res.data.data }))
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, search the Meetup API for `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchMeetup(this.state.search);
//   };

//   render() {
//     return (
//       <div>
//         <Search
//           search={this.state.search}
//           handleFormSubmit={this.handleFormSubmit}
//           handleInputChange={this.handleInputChange}
//         />
//         <ResultList results={this.state.results} />
//       </div>
//     );
//   }
// }

// export default ResultContainer;