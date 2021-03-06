const express = require("express");
const bodyparser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;
// chat dependencies
const cors = require('cors');
const Chatkit = require('pusher-chatkit-server');

const app = express();

const passport = require('passport');
const auth = require('./auth');


// //google auth
// auth(passport);
// app.use(passport.initialize());
// app.get('/', (req, res) => {
//     res.json({
//         status: 'session cookie not set'
//     });
// });
// app.get('/auth/google', passport.authenticate('google', {
//     scope: ['https://www.googleapis.com/auth/userinfo.profile']
// }));
// app.get('/auth/google/callback',
//     passport.authenticate('google', {
//         failureRedirect: '/'
//     }),
//     (req, res) => {}
// );
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// chatkit
const chatkit = new Chatkit.default({
  // instanceLocator: 'v1:us1:ee8fb85b-b346-4935-990a-9119ce8f91a9',
  // key: '17fc9db6-db7a-456c-ae5e-cc79608ec205:V7C9sVmM22k27vXB5/59Wn/ctEw8Ogsb01z68lWU8Eo='
  instanceLocator: 'v1:us1:fdac1e47-fa7e-4a46-a912-854460d6e6e3',
  key: '89b47af3-e562-4808-992b-658e3369f465:5zl7HaA9pva6fg+0ej1QkoLhlaVuFE/BxvGlVDkwPrQ='

})

// let's set up some basic middleware for our express app
// logs requests to the console. not necessary to make passport work, but useful
app.use(morgan('dev'));
// Use body-parser for reading form submissions into objects
app.use(bodyparser.urlencoded({ extended: true }));
// Use body-parser for reading application/json into objects
app.use(bodyparser.json());
// chatkit
app.use(cors());

// chatkit
app.post('/users', (req,res) => {
  const { username } = req.body
  chatkit
  .createUser({
    id: username,
    name: username
  })
  .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error_type === 'services/chatkit/user_already_exists') {
        res.sendStatus(200)
      } else {
        res.status(error.status).json(error)
      }
    });
 });

app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({ userId: req.query.user_id })
  res.status(authData.status).send(authData.body)
});

// file upload
app.post('/upload', (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });

})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// configure using our exported passport function.
// we need to pass the express app we want configured!
// order is important! you need to set up passport
// before you start using it in your routes.
require('./passport')(app);

// use the routes we configured.
app.use(require('./routes'));

// Here's a little custom error handling middleware
// that logs the error to console, then renders an
// error page describing the error.
app.use((error, req, res, next) => {
  console.error(error);
  res.json({
    error
  })
});

// configure mongoose
require('./middleware/mongoose')()
  .then(() => {
    // mongo is connected, so now we can start the express server.
    app.listen(PORT, () => console.log(`Server up and running on ${PORT}.`));
  })
  .catch(err => {
    // an error occurred connecting to mongo!
    // log the error and exit
    console.error('Unable to connect to mongo.')
    console.error(err);
  });