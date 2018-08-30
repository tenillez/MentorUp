import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import SignUp from "./components/SignUp";
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
      <div>
        <Navbar />
        <About />
        <SignUp />
        <br />


        <div>
          {/* Our signin we've created */}
          {/* Eric's form */}
          <div>
            Text: <input name="text" onChange={this.handleChange} value={this.state.value} />
            <button onClick={this.sendNote}>Click</button>
          </div>
          <div>
            <ul>
              {this.state.notes.map(note => {
                return (
                  <li key={note._id}>{note.text}</li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default App;