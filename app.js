const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const multer = require("multer");
const config = require("./config/config");
const getMachine = require("./utils/getMachine");
const errorCode = require("./config/errorCode");
const api_all_music = require("./api/api_all_music");
const api_last_music = require("./api/api_last_music");
const api_music = require("./api/api_music");
const api_collect_list = require("./api/api_collect_list");
const api_list = require("./api/api_list");
const api_status = require("./api/api_status");
const api_add = require("./api/api_add");
const api_remove = require("./api/api_remove");
const api_upload_music = require("./api/api_upload_music");
const api_new_list = require("./api/api_new_list");
const api_update_music_image = require("./api/api_update_music_image");
const api_update_list_image = require("./api/api_update_list_image");

// ============= static source ================
app.use(config.music_file_path, express.static(path.join(__dirname, "public/music")));
app.use(config.image_file_path, express.static(path.join(__dirname, "public/image")));
app.use(config.list_image_path, express.static(path.join(__dirname, "public/list")));

app.use((req, res, next) => {
  if (getMachine(req) === "mobile") {
    app.use(config.home_path, express.static(path.join(__dirname, "view/mobile")));
  } else {
    app.use(config.home_path, express.static(path.join(__dirname, "view/pc")));
  }
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// =============== api ========================
var connection = mysql.createConnection(config.mysql_config);
connection.connect();

app.get("/api/all_music", (req, res) => api_all_music(connection, req, res));
app.get("/api/last_music", (req, res) => api_last_music(connection, req, res));
app.get("/api/music", (req, res) => api_music(connection, req, res));
app.get("/api/collect_list", (req, res) => api_collect_list(connection, req, res));
app.post("/api/list", (req, res) => api_list(connection, req, res));
app.get("/api/status", (req, res) => api_status(connection, req, res));
app.post("/api/add", (req, res) => api_add(connection, req, res));
app.post("/api/remove", (req, res) => api_remove(connection, req, res));
app.post(
  "/api/upload_music", 
  multer({ storage: config.storage_for_music }).array("music", 2), 
  (req, res) => api_upload_music(connection, req, res)
);
app.post(
  "/api/new_list", 
  multer({ storage: config.storage_for_list }).single("list"),
  (req, res) => api_new_list(connection, req, res)
);
app.post(
  "/api/update_music_image", 
  multer({ storage: config.storage_for_update_music_image }).single("music_image"),
  (req, res) => api_update_music_image(connection, req, res)
);
app.post(
  "/api/update_list_image",
  multer({ storage: config.storage_for_update_list_image }).single("list_image"),
  (req, res) => api_update_list_image(connection, req, res)
);

// ============== 404 and 500 ===================
app.use((err, req, res, next) => {
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
});

// ================= port ======================
app.listen(config.PORT, () => {
  console.log("Listen at " + config.PORT);
});