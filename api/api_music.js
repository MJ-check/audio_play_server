const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const api_music = (connection, req, res) => {
  console.log("GET at path: /api/music || host is: " + req.ip);
  connection.query(sql.music(req.query.id), (err, result) => {
    if (err) {
      console.error(err.message);
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
};

module.exports = api_music;