const sql = require("../config/sql");
const errorCode = require("../config/errorCode");
const path = require("path");
const fs = require("fs");

const upload_music = (pool, req, res) => {
  const music_name = req.file.originalname.slice(0, -4);
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      console.log("ERROR: database_connection_error");
      res.status(200).json(errorCode.error_203);
      return ;
    } else {
      connection.query(sql.upload_music_search_music(music_name), (err, result) => {
        if (err) {
          console.log(err);
          console.log("ERROR: upload_file_error");
          const file = "public/music/" + req.file.originalname;
          if (fs.existsSync(path.join(path.resolve(__dirname, ".."), file)) === true) {
            fs.unlinkSync(path.join(path.resolve(__dirname, ".."), file));
          } else {
            console.log("删除失败，文件不存在！");
          }
          res.status(200).json(errorCode.error_223);
          return ;
        } else if(result && result.length !== 0) {
          res.status(200).json({
            status: "success",
            code: 100,
            statement: "success",
          });
        } else {
          connection.query(sql.upload_music_insert_music(music_name), (err, result) => {
            if (err) {
              console.log(err);
              console.log("ERROR: upload_file_error");
              const file = "public/music/" + req.file.originalname;
              if (fs.existsSync(path.join(path.resolve(__dirname, ".."), file)) === true) {
                fs.unlinkSync(path.join(path.resolve(__dirname, ".."), file));
              } else {
                console.log("删除失败，文件不存在！");
              }
              res.status(200).json(errorCode.error_223);
              return ;
            }
            res.status(200).json({
              status: "success",
              code: 100,
              statement: "success",
            });
          });
        }
      });
      connection.release();
    }
  });
};

module.exports = upload_music;