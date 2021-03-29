const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //nos devuelve promesa
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //estos argumentos nos evitan errores en la consola
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB conectada: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
