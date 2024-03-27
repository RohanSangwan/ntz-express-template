var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const applyPassportStrategy = (passport) => {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.JWT_SECRET_KEY || "shhhhhh";

  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      return done(null, { name: "User Name" });
      // Uncomment this code to fetch user details from DB using user id from Json Web Token and remove above return statement
      // User.findOne({ id: jwt_payload.id }, function (err, user) {
      //   if (err) {
      //     return done(err, false);
      //   }
      //   if (user) {
      //     return done(null, user);
      //   } else {
      //     return done(null, false);
      //   }
      // });
    })
  );
};

module.exports = {
  applyPassportStrategy,
};
