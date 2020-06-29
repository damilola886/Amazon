const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.json("Hello Amazon Clone");
// });

app.post("/", (req, res) => {
  console.log(req.body.Name);
  console.log(req.body.Age);
  console.log(req.body.Sex);
});

app.listen(3000, (err) => {
  if (err) {
    console.log("Your errror is", err);
  } else {
    console.log("Listening on PORT", 3000);
  }
});
