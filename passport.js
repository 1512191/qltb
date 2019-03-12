const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const user = require('./model/user');
const config = require('./config');
module.exports = function (passport){
    let opts = {};
    opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken()
    opts.secretOrKey = config.secret;
    console.log(config.secret)
passport.use(new jwtStrategy(opts, (jwt_payload, done)=>{
    user.findById(jwt_payload._id, (err, user)=>{
        if(err) return done(err, false);
        if(user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })
}))

}