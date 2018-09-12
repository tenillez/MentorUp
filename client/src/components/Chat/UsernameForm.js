import React, { Component } from 'react'


class UsernameForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
          <br />
            <h2>MentorUp Chat</h2>
            <div className="enter-chat-form">
              <div className="title-container">
                <h2>Type your name to enter chat</h2>
              </div>
                <form onSubmit={this.onSubmit}>
                <i class="fa fa-commenting" aria-hidden="true"></i>
                  <input id="chat-user"
                    type="text"
                    placeholder="Your name here!"
                    onChange={this.onChange}
                  ></input>
                  <button className="btn btn-dark" type="submit" id="enter-chat">Enter Chat</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        )
      }
    }
    
export default UsernameForm