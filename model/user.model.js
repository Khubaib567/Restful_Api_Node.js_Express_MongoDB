const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  userId: {type: Number, default: 0},
  name: {
    type: String,
    required:[true,'must provide your name!']
  },
  email: {
    type: String,
    required: [true,'must provide email!'],
    unique: [true,'email must be unique!'],
  },
  age: {
    type: Number
  },
  phoneNo: {
    type: String,
  }
});

module.exports = mongoose.model("user", UserSchema);
