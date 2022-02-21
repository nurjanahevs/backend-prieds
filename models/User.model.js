const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  fathersname: {
    type: String,
    required: true,
  },

  mothersname: {
    type: String,
    required: true,
  },

  huswifes: {
    type: String,
  },

  gender: {
    type: String,
    required: true,
  },

  birthdate: {
    type: String,
    required: true,
  },

  birthplace: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  zip: {
    type: String,
    maxlength: 5,
    minlength: 5,
  },

  phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 12,
  },

  religion: {
    type: String,
    required: true,
  },

  idcard: {
    type: String,
    required: true,
    minlength: 15,
    maxlength: 15,
  },

  guarantee: {
    type: String,
    required: true,
  },

  healthservice: {
    type: String,
    required: true,
  },

  datechoose: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
