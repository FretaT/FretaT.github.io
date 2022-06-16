
exports.login = (req, res) => {
  res.cookie("userToken", req.body.username.concat(req.body.password));
  res.redirect("/form");
};
