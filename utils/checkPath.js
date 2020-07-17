const fs = require("fs");

function checkPath(path) {
  if (fs.existsSync(path) === true) {
    return true;
  } else {
    fs.mkdirSync(path);
    return false;
  }
}

module.exports = checkPath;