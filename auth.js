// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// module.exports = (passport) => {
//     passport.serializeUser((user, done) => {
//         done(null, user);
//     });
//     passport.deserializeUser((user, done) => {
//         done(null, user);
//     });
//     passport.use(new GoogleStrategy({
//             clientID: "566310808476-cg0g7dg62nbl6nmv7505phbkifdafsoj.apps.googleusercontent.com",
//             clientSecret: "d1jI4szTSuM9vFhUMIzdQqjH",
//             callbackURL: "http://localhost:8080/auth/google/callback"
//         },
//         (token, refreshToken, profile, done) => {
//             return done(null, {
//                 profile: profile,
//                 token: token
//             });
//         }));
// };