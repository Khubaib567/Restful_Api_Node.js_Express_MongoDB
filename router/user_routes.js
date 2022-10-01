var router = require("express").Router();
const {createUser,getAllUser,getUser,updateUser,deleteUser,deleteAllUser} = require("../controller/user.controller.js");
const {auth} = require('../middleware/auth-config.js')



// Create a new User
router.route("/").post(auth(),createUser);

// Get all users
router.route("/").get(auth(),getAllUser);

// Get user by id
router.route("/:userId").get(auth(),getUser);

// Update a user
router.route("/:userId").put(auth(),updateUser);

// Delete a user
router.route("/:userId").delete(auth(),deleteUser);

// Delete all users
router.route("/").delete(auth(),deleteAllUser);

module.exports = router