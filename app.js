var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var post = require("./routes/indexRoute");
var jwt = require("jsonwebtoken");
var authApi = require("./middleware/auth");


app.set("view engine", "ejs");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://test:test@ds143071.mlab.com:43071/ingredients");
var db = mongoose.connection;

db.on("error", () => {
  console.log("connection error");
});

db.once("open", () => {
  console.log("Connected to CRUD-PRACTICE");
});

//generate JWT, copy JWT from console to access API routes
var token = jwt.sign({
        data:"deyyy..",
        iss:"NSA",
      }, "area51", {
        expiresIn: "1 year"
      },(err,token) => {
        console.log("Generated token:");
        console.log(token);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/*", authApi);
app.use("/", post);




app.listen(3000, () => {
  console.log(Date().toString());
  console.log("Listening to port 3000...");
});
