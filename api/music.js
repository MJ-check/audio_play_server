const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const music = (pool, req, res) => {
  const music_id = req.query.id;
  if (music_id) {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        console.log("ERROR: database_connection_error");
        res.status(200).json(errorCode.error_203);
        return ;
      } else {
        connection.query(sql.music(music_id), (err, result) => {
          if (err) {
            console.log(err);
            console.log("ERROR: db_select_error");
            res.status(200).json(errorCode.error_251);
            return ;
          } else {
            if (result && result.length !== 0) {
              res.status(200).json({
                status: "success",
                code: 100,
                statement: "success",
                data: {
                  music_id: result[0].music_id,
                  music_name: result[0].music_name,
                },
              });
            } else {
              console.log("ERROR: post_body_error");
              res.status(200).json(errorCode.error_201);
              return ;
            }
          }
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

module.exports = music;