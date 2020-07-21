const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const music = (connection, req, res) => {
  console.log("GET at path: /api/music || host is: " + req.ip);
  const music_id = req.query.id;
  if (music_id) {
    connection.query(sql.music(music_id), (err, result) => {
      if (err) {
        console.error("ERROR: db_select_error");
        res.status(200).json(errorCode.error_251);
        return ;
      }
      res.status(200).json({
        status: "success",
        code: 100,
        statement: "success",
        data: {
          music_id: result[0].music_id,
          music_name: result[0].music_name,
        },
      });
    });
  } else {
    const error = new Error();
    error.name = "PostBodyError";
    error.message = "post_body_error " + JSON.stringify(req.query);
    throw error;
  }
};

module.exports = music;