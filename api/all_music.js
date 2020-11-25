const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const all_music = (connection, req, res) => {
  //console.log("GET at path: /api/all_music || host is: " + req.ip);
  connection.query(sql.all_music(), (err, result) => {
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
};

module.exports = all_music;