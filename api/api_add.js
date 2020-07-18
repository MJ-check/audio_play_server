const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const api_add = (connection, req, res) => {
  console.log("POST at path: /api/add || host is: " + req.ip);
  const musicID = req.body.music_id;
  const listID = req.body.list_id;
  const listName = req.body.list_name;
  if (musicID && listID && listName) {
    connection.query(sql.add(musicID, listID, listName), (err, result) => {
      if (err) {
        console.error(err.message);
        if (err.code !== "ER_DUP_ENTRY") {
          res.status(200).json(errorCode.error_252);
          return ;
        }
      }
      connection.query(sql.status(musicID), (err, result) => {
        if (err) {
          console.error(err.message);
          res.status(200).json(errorCode.error_251);
          return ;
        }
        var data = [];
        result.forEach((item) => {
          data.push({
            list_id: item.list_id,
            list_name: item.list_name,
          });
        });
        res.status(200).json({
          status: "success",
          code: 100,
          statement: "success",
          data: data,
        });
      });
    });
  } else {
    console.error("ERROR: post_body_error");
    res.status(200).json(errorCode.error_201);
    return ;
  }
};

module.exports = api_add;