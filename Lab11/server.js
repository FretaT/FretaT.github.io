const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const ejs = require("ejs");

const app = express();


const formController = require("./controllers/form");
const loginController = require("./controllers/login");

global.appRoot = path.resolve(__dirname);
global.userData = { username: "Frehiwet", password: "123" };

app.set("view engine", "html");
app.engine("html", ejs.renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());

app.use((req, res, next) => {
  let userToken = req.cookies["userToken"];
  if (userToken && userToken == userData.username.concat(userData.password))
    return next();

  if (req.originalUrl == "/login" || req.originalUrl == "/") return next();
  else return res.redirect("/");
});

app.get("/", (req, res) => {
  res.render(path.join(__dirname + "/public" + "/login.html"));
});

app.post("/login", loginController.login);
app.get("/form", formController.getForm);
app.post("/addData", formController.addData);
app.get("/view", formController.displayUserData);

app.use(app);

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
