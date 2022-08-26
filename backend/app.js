const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const errorMiddleware = require("./middleware/error");

//config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({ path: "backend/config/config.env" });
  }

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// route import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
const company = require("./routes/companyRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", company);


// middleware for error
app.use(errorMiddleware);

module.exports = app;
