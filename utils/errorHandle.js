function errorHandle(err, req, res, next) {
  if (err.name === "TypeError" && err.message === "wrong_file_type") {
    console.error("ERROR: wrong_file_type");
    res.status(200).json(errorCode.error_221);
  } else if (err.name === "CoverageNotAllowed" && err.message === "coverage_not_allowed") {
    console.error("ERROR: coverage_not_allowed");
    res.status(200).json(errorCode.error_222);
  } else {
    console.error("ERROR: 500 - Server Error");
    console.error(err);
    res.status(500);
    res.sendFile(path.join(__dirname, "view/common/500.html"));
  }
}

module.exports = errorHandle;