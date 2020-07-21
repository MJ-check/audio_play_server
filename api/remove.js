const sql = require("../config/sql");

const remove = (connection, req, res) => {
  console.log("POST at path: /api/remove || host is: " + req.ip);
  const music_id = req.body.music_id;
  const list_id = req.body.list_id;
  if (music_id && list_id) {
    connection.query(sql.remove(music_id, list_id), (err, result) => {
      if (err) {
        const error = new Error();
        error.name = "DBDeleteError";
        error.message = err.message;
        throw error;
      }
      res.status(200).json({
        status: "success",
        code: 100,
        statement: "success",
      });
    });
  } else {
    const error = new Error();
    error.name = "PostBodyError";
    error.message = "post_body_error " + JSON.stringify(req.body);
    throw error;
  }
};

module.exports = remove;