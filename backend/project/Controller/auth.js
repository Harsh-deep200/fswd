// const users = require("../Model/user");
const User = require("../Model/user");

// const user=users.find(item=>item.email===email);

const signupController = async (req, res) => {
  console.log("signupController called");
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    res.status(403).send(`email and password are required`);
    return;
  }
  /* const id = Math.floor(Math.random() * 1000);
  // check if user email is already exists

  users.push({ id: id, email: email, password: password });
  console.log(id, email, password); */
  const user = new User({
    email,
    password,
  });
  user.save().then(() => {
    console.log("user added");
  });

  res.status(200).send(`signup successful`);
};
const loginController = async (req, res) => {
  console.log("login called");
  const email = req.body.email;
  const password = req.body.password;
  // console.log(email, password);

  if (!email || !password) {
    res.status(403).send(`email and password are required`);
    return;
  }
  // const user = users.find((item) => item.email === email);
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).send(`user not found`);
    return;
  }
  if (user.password !== password) {
    res.status(401).send(`incorrect password`);
    return;
  }

  res.status(200).send({ user });
};

const getUserController = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(403).send(`user id is required`);
    return;
  }
  const user = users.find((item) => item.id == id); //that will not match data type so we can access the user that is stored in local memory
  // const user = users.find((item) => item.id === id); //in === match data type so we access only saved user
  res.status(200).json(user);
};

module.exports = { signupController, loginController, getUserController };
