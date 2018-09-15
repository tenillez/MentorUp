import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import { withUser, update } from './services/withUser';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import Chat from './pages/Chat';
import AccountPage from './pages/AccountPage';
import Questionnaire from './pages/Questionnaire';
// import MentorQuiz from './pages/MentorQuiz';
import Community from './pages/Community';

import NotFoundPage from './pages/NotFoundPage';

import './App.css';

class App extends Component {
  componentDidMount() {
    // this is going to double check that the user is still actually logged in
    // if the app is reloaded. it's possible that we still have a user in sessionStorage
    // but the user's session cookie expired.
    axios.get('/api/auth')
      .then(res => {
        // if we get here, the user's session is still good. we'll update the user
        // to make sure we're using the most recent values just in case
        update(res.data);
      })
      .catch(err => {
        // if we get a 401 response, that means the user is no longer logged in
        if (err.response.status === 401) {
          update(null);
        }
      });
  }
  render() {
    const { user } = this.props;
    return (
      
      <Router>
          <Fragment>
              <Navbar
                user={user}
              />
                <Switch>
                  <Route exact path="/" component={HomePage} user={user}/>
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/create" component={CreateAccountPage} />
                  <Route exact path="/chat" component={Chat} />
                  <Route exact path="/user/:userID" component={AccountPage} />
                  <Route exact path="/questionnaire" component={Questionnaire} user={user}/>
                {/* <Route exact path="/questionnaire" component={MentorQuiz} /> */}
                  <Route exact path="/board" component={Community} />
                  <Route exact path="/chat" component={Chat} user={user}/>
                  <Route exact path="/account/:userID" component={AccountPage} user={user}/>
                  <Route exact path="/questionnaire" component={Questionnaire} user={user}/>
                  <Route exact path="/board" component={Community} user={user}/>
                  <Route component={NotFoundPage} />
                </Switch>
              
                <Footer />
          </Fragment>
      </Router> 
    );
  }
}

export default withUser(App);
