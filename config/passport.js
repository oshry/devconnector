const JwStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      mongoose = require('mongoose'),
      User = mongoose.model('users'),
      keys = require('./keys');

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey;

module.exports = passport => {
    passport.use(
        new JwStrategy(opts, (jwt_payload, done) => {
            // console.log(jwt_payload);
            User.findById(jwt_payload.id)
                .then( user => {
                    if(user){
                        return done(null, user);
                    }
                    return done(null, false);
                    })
                .catch(err => console.log(err))
    }));
}
