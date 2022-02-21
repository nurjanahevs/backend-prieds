const userModel = require("../models/User.model");

class userController {
  static async register(req, res) {
    const { name, fathersname, mothersname, huswifes, gender, birthdate, birthplace, address, zip, phone, religion, idcard, guarantee, healthservice, datechoose } = req.body;
    const newUser = new userModel({
      name,
      fathersname,
      mothersname,
      huswifes,
      gender,
      birthdate,
      birthplace,
      address,
      zip,
      phone,
      religion,
      idcard,
      guarantee,
      healthservice,
      datechoose,
    });
    newUser
      .save()
      .then((response) => {
        res.status(200).json({
          message: "success add patient",
          data: response,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
  static async getAllPatient(req, res) {
    const user = await userModel.find();
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({
        message: "patient not found",
      });
    }
  }
  static async getUserById(req, res) {
    const user = await userModel.findOne({
      id: req.params.id,
    });
    if (!user) {
      res.status(400).json({
        message: "patient not found",
      });
    }
    res.status(200).json({
      message: "success get patient by id",
      data: user,
    });
  }
}

module.exports = userController;
