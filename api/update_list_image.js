const errorCode = require("../config/errorCode");

const update_list_image = (connection, req, res) => {
  console.log("POST at path: /api/update_list_image || host is: " + req.ip);
  const listName = req.body.list_name;
  if (listName) {
    res.status(200).json({
      status: "success",
      code: 100,
      statement: "success",
    });
  } else {
    console.error("ERROR: post_body_error");
    console.error(req.body);
    res.status(200).json(errorCode.error_201);
    return ;
  }
};

module.exports = update_list_image;