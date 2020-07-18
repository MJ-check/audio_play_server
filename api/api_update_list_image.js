const errorCode = require("../config/errorCode");

const api_update_list_image = (connection, req, res) => {
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
    res.status(200).json(errorCode.error_201);
    return ;
  }
};

module.exports = api_update_list_image;