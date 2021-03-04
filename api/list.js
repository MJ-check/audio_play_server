const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const list = (pool, req, res) => {
  const list_id = req.query.id;
  if (list_id) {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        console.log("ERROR: database_connection_error");
        res.status(200).json(errorCode.error_203);
        return ;
      } else {
        connection.query(sql.list(list_id), (err, result) => {
          if (err) {
            console.log(err);
            console.log("ERROR: db_select_error");
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
        connection.release();
      }
    });
  } else {
    const error = new Error();
    error.name = "PostBodyError";
    error.message = "post_body_error " + JSON.stringify(req.query);
    throw error;
  }
};

module.exports = list;