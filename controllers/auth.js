const { authService } = require("../services");

const login = (req, res, next) => {
  return authService
    .login(req)
    .then((data) => {
      return res.json({ status: true, data: data });
    })
    .catch((err) => {
      next(err);
    });
};

const register = (req, res, next) => {
  return authService
    .register(req)
    .then((data) => {
      return res.json({ status: true, data: data });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  register,
  login,
};
