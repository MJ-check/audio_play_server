const sql = require("../config/sql");

const list = (connection, req, res) => {
  console.log("POST at path: /api/list || host is: " + req.ip);
  const list_id = req.query.id;
  if (list_id) {
    connection.query(sql.list(list_id), (err, result) => {
      if (err) {
        const error = new Error();
        error.name = "DBSelectError";
        error.message = err.message;
        throw error;
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
    const error = new Error();
    error.name = "PostBodyError";
    error.message = "post_body_error " + JSON.stringify(req.query);
    throw error;
  }
};

module.exports = list;