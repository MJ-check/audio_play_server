const multer = require("multer");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3005;

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
      if (fs.existsSync(path.join(path.resolve(__dirname, ".."), "public/music/" + file.originalname)) === true) {
        cb(null, path.join(path.resolve(__dirname, ".."), "public/music"));
      } else {
        console.error("ERROR: coverage_not_allowed");
        const err = new Error();
        err.name = "CoverageNotAllowed";
        err.message = "coverage_not_allowed";
        cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
      }
    } else {
      console.error("ERROR: wrong_file_type");
      const err = new Error();
      err.name = "WrongFileType";
      err.message = "wrong_file_type";
      cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const storage_for_upload_music_image = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    if (file.mimetype === "image/png") {
      cb(null, path.join(path.resolve(__dirname, ".."), "public/image"));
    } else {
      console.error("ERROR: wrong_file_type");
      const err = new Error();
      err.name = "WrongFileType";
      err.message = "wrong_file_type";
      cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const storage_for_new_list = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    if (file.mimetype === "image/png") {
      cb(null, path.join(path.resolve(__dirname, ".."), "public/list"));
    } else {
      console.error("ERROR: wrong_file_type");
      const err = new Error();
      err.name = "WrongFileType";
      err.message = "wrong_file_type";
      cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const storage_for_update_music_image = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    if (file.mimetype === "image/png") {
      cb(null, path.join(path.resolve(__dirname, ".."), "public/image"));
    } else {
      console.error("ERROR: wrong_file_type");
      const err = new Error();
      err.name = "WrongFileType";
      err.message = "wrong_file_type";
      cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const storage_for_update_list_image = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype === "image/png") {
      cb(null, path.join(path.resolve(__dirname, ".."), "public/list"));
    } else {
      console.error("ERROR: wrong_file_type");
      const err = new Error();
      err.name = "WrongFileType";
      err.message = "wrong_file_type";
      cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// ==============================
module.exports = { 
  PORT, 
  mysql_config,
  storage_for_upload_music,
  storage_for_upload_music_image,
  storage_for_new_list,
  storage_for_update_music_image,
  storage_for_update_list_image,
};