const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const status = (connection, req, res) => {
  console.log("GET at path: /api/status || host is: " + req.ip);
  const music_id = req.query.id;
  connection.query(sql.status(music_id), (err, result) => {
    if (err) {
      console.error(err);
      console.error("ERROR: db_select_error");
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
};

module.exports = status;