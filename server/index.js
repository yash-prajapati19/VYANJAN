const express = require("express");
const app = express();
const connectDB = require("./db/connection");
require("dotenv").config();
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const cookieParser = require("cookie-parser");

// Routes import
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
const resturantRoute = require("./routes/resturant");
const orderRoute = require("./routes/order");
const itemRoute = require("./routes/item");
const verifyToken = require("./middlewares/verifyToken");


// app initialization

app.use(
  cookieSession({
    name: "session",
    keys:["cyberwolve"],
    maxAge: 24*60*60*100,
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Routes ------------------------

app.use("/admin", adminRoute);
app.use("/user", require("./routes/user"), userRoute);
app.use("/resturant", require("./routes/resturant"),verifyToken, resturantRoute);
app.use("/order", require("./routes/order"), verifyToken, orderRoute);
app.use("/item", require("./routes/item"), verifyToken, itemRoute);
app.use("/auth", authRoute);

// serving on port and connecting to database

const port = 5000;

const start = async () => {
  await connectDB(process.env.MONGO_URI)
    .then(() => {
      console.log("Database Connected");
      app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// app.listen(port, ()=>{
//   console.log(`Server is listening on port ${port}...`)
// })

start();
