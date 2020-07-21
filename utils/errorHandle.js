const errorCode = require("../config/errorCode");
const path = require("path");
const fs = require("fs");

function errorHandle(err, req, res, next) {
  const error_name = err.name;
  console.error(err.message);
  switch (error_name) {
    case "PostBodyError":
      res.status(200).json(errorCode.error_201);
      break;
    case "FileNameNull":
      res.status(200).json(errorCode.error_202);
      break;
    case "DataAlreadyExist":
      res.status(200).json(errorCode.error_210);
      break;
    case "WrongFileType":
      res.status(200).json(errorCode.error_221);
      break;
    case "CoverageNotAllowed":
      res.status(200).json(errorCode.error_222);
      break;
    case "FileError":
      const file_path = err.message;
      if (fs.existsSync(file_path) === true) {
        fs.unlinkSync(file_path);
      } else {
        console.error("删除失败，文件不存在！");
      }
      res.status(200).json(errorCode.error_223);
      break;
    case "DBSelectError":
      res.status(200).json(errorCode.error_251);
      break;
    case "DBInsertError":
      res.status(200).json(errorCode.error_252);
      break;
    case "DBDeleteError":
      res.status(200).json(errorCode.error_253);
      break;
    case "DBCreateError":
      res.status(200).json(errorCode.error_254);
      break;
    case "DBUpdateError":
      res.status(200).json(errorCode.error_255);
      break;
    default:
      console.error(err);
      console.error("ERROR: 500 - Server Error");
      res.status(500);
      res.sendFile(path.join(path.resolve(__dirname, ".."), "view/common/500.html"));
      break;
  }
}

module.exports = errorHandle;