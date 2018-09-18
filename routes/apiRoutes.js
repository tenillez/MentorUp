const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../models');
const mustBeLoggedIn = require('../middleware/mustBeLoggedIn');
// const accountController = require("../../controllers/accountPageController");

function getCurrentUser(req, res) {
  // I'm picking only the specific fields its OK for the audience to see publicly
  // never send the whole user object in the response, and only show things it's OK
  // for others to read (like ID, name, email address, etc.)
  const { id, username } = req.user;
  res.json({
    id, username
  });
}

router.route('/auth')
  // GET to /api/auth will return current logged in user info
  .get((req, res) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'You are not currently logged in.'
      })
    }
    getCurrentUser(req, res);
  })
  // POST to /api/auth with username and password will authenticate the user
  .post(passport.authenticate('local'), (req, res) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'Invalid username or password.'
      })
    }

    getCurrentUser(req, res);
  })

  // DELETE to /api/auth will log the user out
  .delete((req, res) => {
    req.logout();
    req.session.destroy();
    res.json({
      message: 'You have been logged out.'
    });
  });

// account page to get account id and info 
router.route('/user/:id')
  .get((req, res) => {
    console.log('\n\n\n\n\n\n\n' + req.params.id);
    db.User.findById(req.params.id, (err, results) => {
      if (err) {
        //console.log('LINE 54\n\n\n' + JSON.stringify(res));
        res.json({ user: false });
      } else {
        res.json(results)
      }
    })
  });

// getting users from db to compare answers
// this command works in mongo shell to get the data
// > db.users.find().forEach(printjson);
// > db.users.find({"isMentor": false}).forEach(printjson);

//adding the /users route to our /api router
router.route('/users')
    //retrieve all articles from the database
    .get(function(req, res) {
        //looks at our User Schema
        db.User.find(function(err, users) {
            if (err) {
                res.send(err);
            }
            //responds with a json object of our database users.
            res.json(users);
        });
    })

// Mentees
router.route('/mentees')
    //retrieve all articles from the database
    .get(function(req, res) {
        //looks at our User Schema
        db.User.find({isMentor: false},function(err, users) {
            if (err) {
                res.send(err);
            }
            //responds with a json object of our database users.
            res.json(users);
        });
    })
// Mentors
//adding the /users route to our /api router
router.route('/mentors')
    //retrieve all articles from the database
    .get(function(req, res) {
        //looks at our User Schema
        db.User.find({isMentor: true},function(err, users) {
            if (err) {
                res.send(err);
            }
            //responds with a json object of our database users.
            res.json(users);
        });
    })

// to store userAnswers from questionnaire
router.route('/user/:id')
  .put((req, res) => {
    db.User.findOneAndUpdate(
      { _id: req.params.id }, { $set: req.body }, { new: true })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

// for userAnswers from questionnaire to determine mentor or mentee- the above might do the following as well... 
// TEST THIS
router.route('/user/:id')
  .put((req, res) => {
    db.User.findOneAndUpdate(
      { _id: req.params.id }, { $set: { isMentor: req.body } }, { new: true })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

router.route('/users')
  // POST to /api/users will create a new user
  .post((req, res, next) => {
    db.User.create(req.body)
      .then(user => {
        const { id, username } = user;
        res.json({
          id, username
        });
      })
      .catch(err => {
        // if this error code is thrown, that means the username already exists.
        // let's handle that nicely by redirecting them back to the create screen
        // with that flash message
        if (err.code === 11000) {
          res.status(400).json({
            message: 'Username already in use.'
          })
        }

        // otherwise, it's some nasty unexpected error, so we'll just send it off to
        // to the next middleware to handle the error.
        next(err);
      });
  });

  // to demonstrate that we can ensure a user must be logged in to use a route
// we need to change this route 
router.route('/questionnaire')
  .get(mustBeLoggedIn(), (req, res) => {
    // at this point we can assume the user is logged in. if not, the mustBeLoggedIn middleware would have caught it
    res.render(questionnaire);
  });


module.exports = router;
