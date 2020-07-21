const sql = require("../config/sql");
const path = require("path");

const upload_music_image = (connection, req, res) => {
  console.log("POST at path: /api/upload_music_image || host is: " + req.ip);
  const music_name = req.file.originalname.slice(0, -4);
  connection.query(sql.upload_music_image_search(music_name), (err, result) => {
    if (err) {
      console.error("ERROR: upload_file_error");
      const file = "public/image/" + req.file.originalname;
      if (fs.existsSync(path.join(path.resolve(__dirname, ".."), file)) === true) {
        fs.unlinkSync(path.join(path.resolve(__dirname, ".."), file));
      } else {
        console.error("删除失败，文件不存在！");
      }
      res.status(200).json(errorCode.error_223);
      return ;
    } else {
      if (result && result.length !== 0) {
        res.status(200).json({
          status: "success",
          code: 100,
          statement: "success",
        });
      } else {
        console.error("ERROR: upload_file_error");
        const file = "public/image/" + req.file.originalname;
        if (fs.existsSync(path.join(path.resolve(__dirname, ".."), file)) === true) {
          fs.unlinkSync(path.join(path.resolve(__dirname, ".."), file));
        } else {
          console.error("删除失败，文件不存在！");
        }
        res.status(200).json(errorCode.error_223);
        return ;
      }
    }
  });
};

module.exports = upload_music_image;