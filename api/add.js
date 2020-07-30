const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const add = (connection, req, res) => {
  console.log("POST at path: /api/add || host is: " + req.ip);
  const music_id = req.body.music_id;
  const list_id = req.body.list_id;
  if (music_id && list_id) {
    connection.query(sql.add(music_id, list_id), (err, result) => {
      if (err) {
        if (err.code !== "ER_DUP_ENTRY") {
          console.error(err);
          console.error("ERROR: db_insert_error");
          res.status(200).json(errorCode.error_252);
          return ;
        }
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

module.exports = add;