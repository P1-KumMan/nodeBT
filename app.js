// const express = require("express");

// const app = express();

// const morgan = require("morgan");

// const postRoutes = require("./routes/post");

// const MyMiddle = (req, res, next) => {
//   console.log("middleware applied!!");
//   next();
// };

// app.use(MyMiddle);

// app.use(morgan("dev"));

// app.use("/", postRoutes);

// const port = 8080;

// app.listen(port, () => {
//   console.log(`A node.js app is  listening to port:${port}`);
// });
// import mongoose
const mongoose = require("mongoose");
// load env variables
const dotenv = require("dotenv");
dotenv.config();

//db connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});
