const sql = require("../config/sql");

const update_list_msg = (connection, req, res) => {
  console.log("POST at path: /api/update_list_msg || host is: " + req.ip);
  const list_id = req.body.list_id;
  const list_new_msg = req.body.list_new_msg;
  if (list_id) {
    connection.query(sql.update_list_msg(list_id, list_new_msg), (err, result) => {
      if (err) {
        const error = new Error();
        error.name = "DBUpdateError";
        error.message = "db_update_error";
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
}

module.exports = update_list_msg;