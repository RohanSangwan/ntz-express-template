var jwt = require("jsonwebtoken");
// Import your database Modals here from ./Modals to query your database

const login = (req) => {
  return new Promise((resolve, reject) => {
    // Your Database query goes here.
    var token = jwt.sign(
      { id: "user id goes here" },
      process.env.JWT_SECRET_KEY || "shhhhhh"
    );
    return resolve({ token: token });
  });
};

const register = (req) => {
  return new Promise((resolve, reject) => {
    // Your Database query goes here.
    return resolve("query response data");
  });
};

module.exports = {
  login,
  register,
};
