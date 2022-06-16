const path = require("path");

exports.getForm = (req, res) => {
  res.render(path.join(appRoot + "/public" + "/form.html"));
};

let data;
exports.addData = (req, res) => {
  data = req.body;
  res.cookie("input1", data.input1);
  res.cookie("input2", data.input2);
  res.cookie("input3", data.input3);
  res.cookie("selectedValue", data.selectedValue);
  res.cookie("input4", data.input4);
  res.redirect("/view");
};

exports.displayUserData = (req, res, formData) => {
  res.render(path.join(appRoot, "/public", "formdisplay"), {
    data: formData,
  });
};
