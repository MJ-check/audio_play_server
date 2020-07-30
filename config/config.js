const multer = require("multer");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3500;

const mysql_config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "audioplay",
  multipleStatements: true,
};

const storage_for_upload_music = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    if (file.mimetype === "audio/mp3") {
      if (fs.existsSync(path.join(path.resolve(__dirname, ".."), "public/music/" + file.originalname)) === false) {
        cb(null, path.join(path.resolve(__dirname, ".."), "public/music"));
      } else {
        const err = new Error();
        err.name = "CoverageNotAllowed";
        err.message = "coverage_not_allowed";
        cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
      }
    } else {
      const err = new Error();
      err.name = "WrongFileType";
      err.message = "wrong_file_type";
      cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
  filename: (req, file, cb) => {
    const file_name = file.originalname.slice(0, -4);
    if (file_name) {
      cb(null, file.originalname);
    } else {
      const error = new Error();
      error.name = "FileNameNull";
      error.message = "file_name_null";
      cb(error, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
});

const storage_for_upload_music_image = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    if (file.mimetype === "image/png") {
      cb(null, path.join(path.resolve(__dirname, ".."), "public/image"));
    } else {
      const err = new Error();
      err.name = "WrongFileType";
      err.message = "wrong_file_type";
      cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
  filename: (req, file, cb) => {
    const file_name = file.originalname.slice(0, -4);
    if (file_name) {
      cb(null, file.originalname);
    } else {
      const error = new Error();
      error.name = "FileNameNull";
      error.message = "file_name_null";
      cb(error, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
});

const storage_for_upload_list_image = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    if (file.mimetype === "image/png") {
      cb(null, path.join(path.resolve(__dirname, ".."), "public/list"));
    } else {
      const err = new Error();
      err.name = "WrongFileType";
      err.message = "wrong_file_type";
      cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
  filename: (req, file, cb) => {
    const file_name = file.originalname.slice(0, -4);
    if (file_name) {
      cb(null, file.originalname);
    } else {
      const error = new Error();
      error.name = "FileNameNull";
      error.message = "file_name_null";
      cb(error, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
});

// ==============================
module.exports = { 
  PORT, 
  mysql_config,
  storage_for_upload_music,
  storage_for_upload_music_image,
  storage_for_upload_list_image,
};