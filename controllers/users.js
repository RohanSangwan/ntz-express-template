const { usersService } = require("../services");

const getAllUsers = (req, res, next) => {
  return usersService
    .getAllUsers(req)
    .then((data) => {
      return res.json({ status: true, data: data });
    })
    .catch((err) => {
      next(err);
    });
};

const getUserById = (req, res, next) => {
  return usersService
    .getUserById(req)
    .then((data) => {
      return res.json({ status: true, data: data });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getAllUsers,
  getUserById
};
