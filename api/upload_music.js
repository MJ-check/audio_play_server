const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const upload_music = (connection, req, res) => {
  console.log("POST at path: /api/upload_music || host is: " + req.ip);
  var musicName = null;
  req.files.forEach((item) => {
    if (item.mimetype === "audio/mp3") {
      musicName = item.originalname.slice(0, -4);
    }
  });
  const music_name = req.body.music_name;
  if (musicName && music_name) {
    connection.query(sql.upload_music(musicName), (err, result) => {
      if (err) {
        console.error(err.message);
        res.status(200).json(errorCode.error_252);
        return ;
      }
      connection.query(sql.last_music(1), (err, result) => {
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
    });
  } else {
    console.error("ERROR: post_body_error");
    console.error(req.body);
    res.status(200).json(errorCode.error_201);
    return ;
  }
};

module.exports = upload_music;