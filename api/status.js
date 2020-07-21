const sql = require("../config/sql");

const status = (connection, req, res) => {
  console.log("GET at path: /api/status || host is: " + req.ip);
  const music_id = req.query.id;
  connection.query(sql.status(music_id), (err, result) => {
    if (err) {
      const error = new Error();
      error.name = "DBSelectError";
      error.message = err.message;
      throw error;
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