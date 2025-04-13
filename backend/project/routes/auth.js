const {
  loginController,
  signupController,
  getUserController,
} = require("../Controller/auth");
const { route } = require("./post");

const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  console.log(`auth called`);
  res.send("you have a auhtorization");
});
router.get(`/all`, (req, res) => {
  console.log(`auth/all called`);
  res.json({
    data: [
      {
        name: "harsh",
        age: "22",
      },
      {
        name: "abc",
        age: "idk",
      },
    ],
  });
});

router.post("/login", loginController);
router.post("/signup", signupController);
router.get("/:id", getUserController);

module.exports = router;
