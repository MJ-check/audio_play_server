const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const multer = require("multer");
const config = require("./config/config");
const getMachine = require("./utils/getMachine");
const api = require("./api/index");
const errorHandle = require("./utils/errorHandle");

// ============= static source ================
app.use("/public/music", express.static(path.join(__dirname, "public/music")));
app.use("/public/image", express.static(path.join(__dirname, "public/image")));
app.use("/public/list", express.static(path.join(__dirname, "public/list")));
// ====================test======================
app.use("/test", express.static(path.join(__dirname, "/view/test")));
// ==============================================
app.use((req, res, next) => {
  if (getMachine(req) === "mobile") {
    app.use("/", express.static(path.join(__dirname, "view/mobile")));
  } else {
    app.use("/", express.static(path.join(__dirname, "view/pc")));
  }
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// =============== api ========================
var connection = mysql.createConnection(config.mysql_config);
connection.connect();
// 音乐相关API
// 获取所有音乐信息
app.get("/api/all_music", (req, res) => api.all_music(connection, req, res));
// 获取最新上传的音乐信息
app.get("/api/last_music", (req, res) => api.last_music(connection, req, res));
// 获取单个音乐信息
app.get("/api/music", (req, res) => api.music(connection, req, res));
// 获取音乐在所有收藏夹内的状态
app.get("/api/status", (req, res) => api.status(connection, req, res));
// 添加音乐进入收藏夹
app.post("/api/add", (req, res) => api.add(connection, req, res));
// 把音乐移除收藏夹
app.post("/api/remove", (req, res) => api.remove(connection, req, res));
// 上传音乐文件
app.post(
  "/api/upload_music", 
  multer({ storage: config.storage_for_upload_music }).single("music_file"), 
  (req, res) => api.upload_music(connection, req, res)
);
// 上传音乐图片
app.post(
  "/api/upload_music_image",
  multer({ storage: config.storage_for_upload_music_image }.single("music_image")),
  (req, res) => api.upload_music_image(connection, req, res)
);
// 更新音乐图片
app.post(
  "/api/update_music_image", 
  multer({ storage: config.storage_for_update_music_image }).single("music_image"),
  (req, res) => api.update_music_image(connection, req, res)
);
// 收藏夹相关API
// 获取所有收藏夹信息
app.get("/api/collect_list", (req, res) => api.collect_list(connection, req, res));
// 获取收藏夹内音乐信息
app.get("/api/list", (req, res) => api.list(connection, req, res));
// 创建收藏夹
app.post(
  "/api/new_list", 
  multer({ storage: config.storage_for_collect_list }).single("list_image"),
  (req, res) => api.new_list(connection, req, res)
);
// 更新收藏夹图片
app.post(
  "/api/update_list_image",
  multer({ storage: config.storage_for_update_list_image }).single("list_image"),
  (req, res) => api.update_list_image(connection, req, res)
);
app.post("/api/update_list_name", (req, res) => api.update_list_name(connection, req, res));
app.post("/api/update_list_msg", (req, res) => api.update_list_msg(connection, req, res));

// ============== 404 and 500 ===================
app.use((err, req, res, next) => errorHandle(err, req, res, next));

// ================= port ======================
app.listen(config.PORT, () => {
  console.log("Listen at " + config.PORT);
});