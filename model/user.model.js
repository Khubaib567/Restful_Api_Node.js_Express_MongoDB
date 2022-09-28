const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  userId: {type: Number,unique:true,default:0},
  name: {
    type: String,
    required:[true,'must provide your name!']
  },
  email: {
    type: String,
    required: [true,'must provide email!'],
    unique: [true,'email must be unique!'],
    match: [
      /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/,
      "Please enter a valid email address",
    ],
  },
  age: {
    type: Number
  },
  phoneNo: {
    type: String,
  }
});

module.exports = mongoose.model("user", UserSchema);
