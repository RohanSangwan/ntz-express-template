// Import your database Modals here from ./Modals to query your database

const getAllUsers = (req) => {
  return new Promise((resolve, reject) => {
    // Your Database query goes here.
    return resolve("query response data");
  });
};

const getUserById = (req) => {
  return new Promise((resolve, reject) => {
    // Your Database query goes here.
    return resolve(req.params.id);
  });
};

module.exports = {
  getAllUsers,
  getUserById,
};
