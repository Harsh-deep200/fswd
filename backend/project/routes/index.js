const router = require(`express`).Router();
const postRouter = require("./post");
const authRouter = require("./auth");
const log = require("../Middleware/logger");

router.get("/", (req, res) => {
  console.log(`this is root directory`);
  res.send(`this is root directory`);
});

router.use("/post", postRouter);
router.use("/auth", log, authRouter);
// router.use("/user", authRouter);
module.exports = router;
