const mongoose = require("mongoose");
require("dotenv").config();

const con = mongoose.connect(process.env.MONGOURI);
console.log("connection Successfull");

const schema = mongoose.Schema;

const data = new schema({
  first_name: {
    type: String,
    reuired: true,
  },
  last_name: {
    type: String,
    reuired: true,
  },
  email: {
    type: String,
    reuired: true,
  },
  gender: {
    type: String,
    reuired: true,
  },
  income: {
    type: String,
    reuired: true,
  },

  city: {
    type: String,
    reuired: true,
  },
  car: {
    type: String,
    reuired: true,
  },
  quote: {
    type: String,
    reuired: true,
  },
  phone_price: {
    type: String,
    reuired: true,
  },
});

const dataModel = new mongoose.model("data", data);

module.exports = dataModel;

// const cols = [
//     "first_name",
//     "last_name",
//     "email",
//     "gender",
//     "income",
//     "city",
//     "car",
//     "quote",
//     "phone_price",
//   ];
