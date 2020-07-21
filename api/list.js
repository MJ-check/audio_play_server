const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const list = (connection, req, res) => {
  console.log("POST at path: /api/list || host is: " + req.ip);
  const listName = req.body.list_name;
  if (listName) {
    connection.query(sql.list(listName), (err, result) => {
      if (err) {
        console.error(err.message);
        res.status(200).json(errorCode.error_251);
        return ;
      }
      var data = [];
      result.forEach((item) => {
        data.push({
          music_id: item.music_id,
          music_name: item.music_name,
        });
      });
      res.status(200).json({
        status: "success",
        code: 100,
        statement: "success",
        data: data,
      });
    });
  } else {
    console.error("ERROR: post_body_error");
    console.error(req.body);
    res.status(200).json(errorCode.error_201);
    return ;
  }
};

module.exports = list;