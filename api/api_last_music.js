const sql = require("../config/sql");
const errorCode = require("../config/errorCode");
const NUMBER = 5;

const api_last_music = (connection, req, res) => {
  console.log("GET at path: /api/last_music || host is: " + req.ip);
  connection.query(sql.last_music(NUMBER), (err, result) => {
    if (err) {
      console.error(err.message);
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
};

module.exports = api_last_music;