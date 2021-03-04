const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const add = (pool, req, res) => {
  const music_id = req.body.music_id;
  const list_id = req.body.list_id;
  if (music_id && list_id) {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        console.log("ERROR: database_connection_error");
        res.status(200).json(errorCode.error_203);
        return ;
      } else {
        connection.query(sql.add(music_id, list_id), (err, result) => {
          if (err) {
            if (err.code !== "ER_DUP_ENTRY") {
              console.log(err);
              console.log("ERROR: db_insert_error");
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
        connection.release();
      }
    });
  } else {
    const error = new Error();
    error.name = "PostBodyError";
    error.message = "post_body_error " + JSON.stringify(req.body);
    throw error;
  }
};

module.exports = add;