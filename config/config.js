const multer = require("multer");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const home_path = "/";
const music_file_path = "/public/music";
const image_file_path = "/public/image";
const list_image_path = "/public/list";

const mysql_config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "audioplay",
  multipleStatements: true,
};

const storage_for_music = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    const mime_type = file.mimetype;
    if (mime_type === "audio/mp3") {
      if (fs.existsSync(path.join(path.resolve(__dirname, ".."), "public/music/" + file.originalname)) === true) {
        console.error(file);
        const err = new Error();
        err.name = "CoverageNotAllowed";
        err.message = "coverage_not_allowed";
        cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
      } else {
        cb(null, path.join(path.resolve(__dirname, ".."), "public/music"));
      }
    } else if (mime_type === "image/png") {
      cb(null, path.join(path.resolve(__dirname, ".."), "public/image"));
    } else {
      console.error(file);
      const err = new Error();
      err.name = "TypeError";
      err.message = "wrong_file_type";
      cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const storage_for_list = multer.diskStorage({
  destination: (req, file, cb) => {
    const mime_type = file.mimetype;
    if (mime_type === "image/png") {
      cb(null, path.join(path.resolve(__dirname, ".."), "public/list"));
    } else {
      console.error(file);
      const err = new Error();
      err.name = "TypeError";
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
    const mime_type = file.mimetype;
    if (mime_type === "image/png") {
      cb(null, path.join(path.resolve(__dirname, ".."), "public/image"));
    } else {
      console.error(file);
      const err = new Error();
      err.name = "TypeError";
      err.message = "wrong_file_type";
      cb(err, path.join(path.resolve(__dirname, ".."), "public/rubbish"));
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const storage_for_update_list_image = multer({
  destination: (req, file, cb) => {
    const mime_type = file.mime_type;
    if (mime_type === "image/png") {
      cb(null, path.join(path.resolve(__dirname, ".."), "public/list"));
    } else {
      console.error(file);
      const err = new Error();
      err.name = "TypeError";
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
  home_path,
  music_file_path,
  image_file_path,
  list_image_path, 
  storage_for_music,
  storage_for_list,
  storage_for_update_music_image,
  storage_for_update_list_image,
};