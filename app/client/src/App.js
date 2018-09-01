import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Navbar from "./components/NavBar";
import About from "./components/About";

class App extends Component {
  state = {
    text: "",
    notes: []
  }
  componentDidMount() {
    this.loadNotes();
  }
  handleChange = event => {
    this.setState({ text: event.target.value });
  }
  loadNotes = () => {
    axios.get("/api/notes").then(res => {
      console.log(res);
      this.setState({ notes: res.data })
    })
  }
  sendNote = event => {
    axios.post("/api/create", { text: this.state.text }).then(res => {
      this.loadNotes();
    });
  }

  // function needed to get form data from create account
  // addAccount = event => {
  //   axios.post("/api/create", { form data here... })
  // }

  render() {
    return (
      // react router will be here instead
      <div className="App">
        <Navbar />
        <About />
        {/* just to test components */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <SignUp />
        <SignIn />
        <br />
      </div>
      
    );
  }
}

export default App;