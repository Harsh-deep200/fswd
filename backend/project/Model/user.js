/* const users = [
  {
    id: "123",
    email: "anuj@gmail.com",
    password: "234",
  },
  {
    id: "456",
    email: "harsh@gmail.com",
    password: "789",
  },
];

module.exports = users; */

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

module.exports = mongoose.model("user", userSchema); //in database user name ki collection banegi
