const mongoose = require("mongoose");

const connectDB = () => {
  main().catch((err) => console.log(err));

  async function main() {
    const dbPathUri = "mongodb://localhost:27017/";
    const dbName = "evaHospitaldb";
    await mongoose.connect(`${dbPathUri}${dbName}`);
  }
};

module.exports = connectDB;