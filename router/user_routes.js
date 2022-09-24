var router = require("express").Router();
const {createUser,getAllUser,getUser,updateUser,deleteUser,deleteAllUser} = require("../controller/user.controller.js");
const {auth} = require('../controller/auth-config.js')

// private route
router.route("/private").get(auth());

// Create a new User
router.route("/").post(createUser);

// Get all users
router.route("/").get(getAllUser);

// Get user by id
router.route("/:userId").get(getUser);

// Update a user
router.route("/:userId").put(updateUser);

// Delete a user
router.route("/:userId").delete(deleteUser);

// Delete all users
router.route("/").delete(deleteAllUser);

module.exports = router