import axios from 'axios';
import React, { Component } from 'react';
import { withUser } from '../services/withUser';
import About from "../components/About";

class HomePage extends Component {
  state = {
    stuff: null
  }
  componentDidMount() {
    // only try loading stuff if the user is logged in.
    if (!this.props.user) {
      return;
    }

    axios.get('/api/stuff')
      .then(res => {
        this.setState({
          stuff: res.data
        });
      })
      .catch(err => {
        // if we got an error, we'll just log it and set stuff to an empty array
        console.log(err);
        this.setState({
          stuff: []
        });
      });
  }
  render() {
    // get the user prop from props
    // const { user } = this.props; 
    // const { stuff } = this.state; // get stuff from state

    return (
      <div>
        {/* <Fragment>
          {user &&
            <div className="loggedinmessage">
              Welcome back, {user.username}!
          </div>
          }
          {!user &&
            <div className="loggedinmessage">Please login or register to get started!</div>
          }
        </Fragment> */}
        <About />
        
        
        
      </div>
      
    );
  }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(HomePage);
