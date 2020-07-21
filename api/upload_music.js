const sql = require("../config/sql");
const path = require("path");

const upload_music = (connection, req, res) => {
  console.log("POST at path: /api/upload_music || host is: " + req.ip);
  const music_name = req.file.originalname.slice(0, -4);
  connection.query(sql.upload_music_search_music(music_name), (err, result) => {
    if (err) {
      const error = new Error();
      error.name = "FileError";
      error.message = path.join(path.resolve(__dirname, ".."), "public/music/" + req.file.originalname);
      throw error;
    } else if(result && result.length !== 0) {
      res.status(200).json({
        status: "success",
        code: 100,
        statement: "success",
      });
    } else {
      connection.query(sql.upload_music_insert_music(music_name), (err, result) => {
        if (err) {
          const error = new Error();
          error.name = "FileError";
          error.message = path.join(path.resolve(__dirname, ".."), "public/music/" + req.file.originalname);
          throw error;
        }
        res.status(200).json({
          status: "success",
          code: 100,
          statement: "success",
        });
      });
    }
  });
};

module.exports = upload_music;