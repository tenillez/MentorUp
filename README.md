# Simple Example Using Passport-Local with Express and React

The home page hides sensitive data unless you're logged in. The navbar also changes based on whether or not you are logged in. Finally, it has create user and login views.

## Running the Example

1. In a separate terminal window, start monogd
2. Navigate to the root of the repo
3. Run `yarn install`
6. `cd client`
7. `yarn install`
8. `cd ..`
9. Run `yarn start` to run the server
10. Create-react-app will start your express server and launch your browser to http://localhost:3000 for you.

## Highlights

`server.js` is pretty typical express server. We use handlebars as the renderer, body-parser, and connects using mogoose before starting. The most interesting parts are on lines 21 through 28. We have some code in separate modules to _first_ configure Passport and _second_ configure our routes (which have dependencies on passport).

`passport.js` has our passport configuration. The order the various pieces are configured are important. Other than that, there are descriptive comments about what each section is doing. You do NOT have to use sessions, however for typical web apps they are probably the simplest and best way to keep a user logged in once they have logged in. So, I'd recommend setting that up unless you know you definitely don't want or need it.

`routes/apiRoutes.js` This contains a few routes:

- `/api/auth` is where we go to read, create, or delete our current login session. The create portion (`POST /api/auth`) uses the `passport.authenticate` middleware, which will read the user's credentials they posted and either log them in or return a 401 error. `GET /api/auth` simply returns the currently logged in user's info, if they are logged in. `DELETE /api/auth` will effectively log the user out.
- `/api/users` has a POST route for creating a new user.
- `/api/stuff` is just a test route that returns an array of strings if the user is logged in. if the user is not logged in, it will return a 403 Forbidden error.

`routes/htmlRoutes.js` merely renders the index.html in client/build for any route (other than our API routes). This is to make the client-side react-router experience work correctly.

`client/src/services/withUser.js` is a little bit of React magic. We need a single state to track our current user object. We also need to be able to inject that user as a prop to any component that needs to be aware of the current user. Said components also need to have their user prop updated if the user state changes. Finally, we need a way of updating the state from a component so everyone is notified. There are a few ways to do this, but in this example we're using what's called a High Order Component. It comes with a function called `withUser` that can be called to wrap any component. It will then do exactly what was described above: it will ensure your wrapped component receives a user prop and keep it up-to-date if the user state changes. It also has an `update` function that can be imported and called by any component that needs to change the state (as you can see in `client/src/pages/LoginPage.js`).

This is a greatly simplified version of what you might see in Flux or Redux. You can use Flux, Redux, etc. if you want a more mature approach that can be used to track other states your app needs if you want, but be aware the learning curve for something like Redux is deceptively high.

Finally, the React app is using `material-ui` and `react-flexbox-grid` for UI. You obviously don't need to use these modules, and use your favorite react component library.

## Production Notes

Client-side validation is important. The forms used to create an account and log in do bare minimum validation and are probably not suitable for a real application. You might want to use a validation module or form module with built-in validation for React.

If you ARE using sessions, you need to use a production-ready session store. A session store is a bit of code that express-session uses to store session data. Without a store, it can't keep track of sessions and the whole thing won't work. By default, express-session has a built-in store that just keeps sessions in memory. That is what we're using here in this example. However, the authors of express-session strongly warn you against using this default store in production. [There are lots of other stores to choose from](https://github.com/expressjs/session#compatible-session-stores), like storing session data in Redis, Memcache, or even a database. I like using Redis to cache information like sessions, but you need a Redis server that your local and production servers can connect to in order to get this working.

### Strategies

A Strategy is like middleware for PassportJS that attempts to authenticate a user based on a request. How the Strategy authenticates a user is dependent on the Strategy implementation you decide to use. Strategies can vary from simple, such as [LocalStrategy](https://github.com/jaredhanson/passport-local) who simply authenticates a user using username/password against your application (usually using a database), to a more complex strategy using OAuth 2 that allows users to log in using a socia media account. There are [500+ strategies](http://www.passportjs.org/packages/), so the place to start is determining how you want users to be able to authenticate. Start simple and add from there; remember that your app is allowed to use several strategies.

#### Do you want users to be able to sign up using username and password?

Use the [passport-local](https://github.com/jaredhanson/passport-local) package for the LocalStrategy. Users will simply authenticate using a username and password, and you'll configure the strategy on how to find the user in your database and then check the provided password is correct.

**Caveat**: This is effectively managing the account's username and password inside your application. Security is HARD and absolutely CRITICAL. So if you're not ready for secure password management, go with a social media identity provider (Google, Twitter, Facebook, etc.) instead. Additionally, if your app will only work by accessing a user's data on a social media site, then you should _not_ use LocalStrategy, but the strategy for that social media site.

#### Do you need to access a social media API on behalf of a user?

Use the appropriate strategy for the social media site. Here are some common strategies:

- Google: [passport-google-oauth](https://github.com/jaredhanson/passport-google-oauth)
- Twitter: [passport-twitter](https://github.com/jaredhanson/passport-twitter)
- Spotify: [passport-spotify](https://github.com/JMPerez/passport-spotify)
- Facebook: [passport-facebook](https://github.com/jaredhanson/passport-facebook)

#### Do you want to have a mix of local and social media accounts, or have advanced API authentication requirements and don't want to do all the auth code yourself?

Consider signing up for Auth0. Security is hard, and if you're not comfortable doing it or ready to take on the responsibility, let the pros do it for you. It's free to start, can secure your APIs, and allows you to easily implement authentication using any variety of identity providers, including custom username/password database, Facebook, Google, etc. Auth0 does the heavy lifting for securely managing credentials, OAuth 2 exchanges between your apps and the identity providers, and all you need to do is drop a little code and some config values into your app. It also makes many other advanced authn/authz tasks easy for you, like SSO, SAML, and a whole slew of other things.

The Auth0 team has provided the [passport-auth0](https://github.com/auth0/passport-auth0) to drop into your app. You can get more detailed and ready-to-cut-and-paste code once you create an account and create your first client in your account.

## Source

https://github.com/HackedByChinese/passport-examples
