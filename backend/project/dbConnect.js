const mongoose = require("mongoose");

const user = require("./Model/user");

module.exports.init = async () => {
  const mongouri =
    "mongodb+srv://harshdeep542001:~Harsh~8118@cluster0.3bygcns.mongodb.net/?retryWrites=true&w=majority";
  try {
    mongoose.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log(e);
  }
};
