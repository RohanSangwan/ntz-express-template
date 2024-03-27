var express = require("express");
var router = express.Router();
const { usersController } = require("../controllers");

/* GET users listing. */
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);

module.exports = router;
