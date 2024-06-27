const dotenv = require("dotenv");

dotenv.config({ path: "./Config.env" });

const express = require("express");
const cors = require("cors");

// Controllers
const sendMail = require("./Controllers/sendMail");

let app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "sucess",
    hello: "hello",
  });
});

app.post("/sendMail/", sendMail);

let port = process.env.PORT || 8000;

app.listen(port, (req, res) => {
  console.log("Server has Started!");
});
