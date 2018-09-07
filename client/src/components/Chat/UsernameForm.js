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
      <div>
        <div className="enter-chat-container">
          <div className="row"> 
            <div className="col-lg-12">
              <h2>What is your name?</h2>
              <form onSubmit={this.onSubmit}>
                <input id="chat-user"
                  type="text"
                  placeholder="Your name here!"
                  onChange={this.onChange}
                ></input>
                <button type="submit" id="enter-chat">Enter Chat</button>
                {/* <input type="submit" /> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UsernameForm