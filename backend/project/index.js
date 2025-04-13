/* const utils = require("./utils");

console.log(utils.multiply(5, 4));
utils.log.Warning("this is warning"); */

/* //make a server
// this is simple server with express

const express = require(`express`);
const app = express();

app.use(express.json());

app.get(`/`, (req, res) => {
  console.log(`user called`);
  //res.send(`hello world`);
  res.send({
    name: "harsh",
    age: "22",
  });
});
app.get(`/getFile`, (req, res) => {
  res.sendFile(__dirname + "/utils.js");
});
app.post("/user", (req, res) => {
  console.log(req.body);
  res.json({
    name: "harsh",
    age: "22",
    multiplyResult: req.body.a * req.body.b,
  });
});

app.listen(3000, () => {
  console.log(`server is running on port no. 3000`);
}); */

//build a GET API service to return a random number 1 to 6

/* const express = require(`express`);
const app = express();
//const bodyParser=require(`body-parser`);

app.use(express.json());

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get(`/`, (req, res) => {
  console.log(`user called`);
  res.send(`hello client`);
});

app.post("/random", (req, res) => {
  //console.log(req.body);
  //console.log(`randon number generate`);
  res.json({
    randomNo: randomNumber(req.body.min, req.body.max),
  });
});

app.listen(3000, () => {
  console.log(`server is listening on port no. 3000`);
}); */

//build an API service to do post request with the following operations:
//a. Sum of n numbers: POST /sum
//b. average of n numbers: POST /average

/* const express = require(`express`);
const app = express();
//const bodyParser=require(`body-parser`);

app.use(express.json());

function sumOfNum(n) {
  // if we want to pass simple int to json than direct return
  //   n = parseInt(n);
  //   return (n * (n + 1)) / 2;

  //if we want to pass string to json than convert into string
  n = parseInt(n);
  let b = (n * (n + 1)) / 2;
  return b.toString();
}

function calculateAverage(n) {
  n = parseInt(n);
  let b = (n * (n + 1)) / 2;
  b = b / n;
  return b.toString();
}

app.get(`/`, (req, res) => {
  console.log(`user called`);
  res.send(`hello client`);
});

app.post(`/sum`, (req, res) => {
  res.json({
    name: "harsh",
    age: "22",
    sum: sumOfNum(req.body.n),
  });
});

app.post(`/average`, (req, res) => {
  res.json({
    average: calculateAverage(req.body.n),
  });
});

app.listen(3000, () => {
  console.log(`server is listening on port no. 3000`);
});  */

/* //isme hum alag alag routes bana rahe he express framework ka use karke
const express = require(`express`);
const dotenv = require(`dotenv`);
const postRouter = require("./routes/post");
const authRouter = require("./routes/auth");
// const loginRouter = require("./routes/login");

dotenv.config({ path: "./.env" });

//bhot sarre routes ho jate he tho hum un sabse bachne ke liye ek routes mein index name ki file bana lete he
const app = express();
app.use(express.json());
app.use("/post", postRouter);
app.use("/auth", authRouter);
// app.use("/login", loginRouter);

const port = process.env.PORT;

app.get(`/`, (req, res) => {
  console.log(`user called`);
  res.send(`this is home directory`);
});

//router banane ke baad hum router ka use kar skte he

// app.get(`/post`,(req,res)=>{
//     res.json({
//         id: "123",
//         title: "post",
//     });
// });

app.listen(port, () => {
  console.log(`server is listening on port no. 3000`);
}); */

const express = require(`express`);
const mainRouter = require("./routes/index");
const dbConnect = require("./dbConnect");

const dotenv = require(`dotenv`);
dotenv.config({ path: "./.env" });
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(`main directory called`);
  res.send("this is main directory");
});

app.use("/api", mainRouter);

dbConnect
  .init()
  .then(() => {
    console.log("db connected");

    app.listen(port, (req, res) => {
      console.log(`server is listening on port no. 3000`);
    });
    // mongoose.connection.close();
  })
  .catch((e) => {
    console.log(e);
  });
