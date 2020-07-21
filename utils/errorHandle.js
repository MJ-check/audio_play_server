const errorCode = require("../config/errorCode");
const path = require("path");

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
    case "WrongFileType":
      res.status(200).json(errorCode.error_221);
      break;
    case "CoverageNotAllowed":
      res.status(200).json(errorCode.error_222);
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