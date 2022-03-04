// imports
const mongoose = require("mongoose");

// function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return console.log("연결된 데이터베이스 - Base de datos conectada.");
  } catch (error) {
    console.log(error);
    return process.exit(1);
  }
};

// export
module.exports = connectDB;
