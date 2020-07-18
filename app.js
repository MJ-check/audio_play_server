const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const config = require("./config/config");
const getMachine = require("./utils/getMachine");
const sql = require("./config/sql");
const multer = require("multer");

// ============= static source ================
app.use(config.music_file_path, express.static(path.join(__dirname, "public/music")));
app.use(config.image_file_path, express.static(path.join(__dirname, "public/image")));
app.use(config.list_image_path, express.static(path.join(__dirname, "public/list")));

app.use((req, res, next) => {
  if (getMachine(req) === "mobile") {
    //console.log("mobile");
    app.use(config.home_path, express.static(path.join(__dirname, "view/mobile")));
  } else {
    //console.log("pc");
    app.use(config.home_path, express.static(path.join(__dirname, "view/pc")));
  }
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// =============== api ========================
var connection = mysql.createConnection(config.mysql_config);
connection.connect();

app.get("/api/all_music", (req, res) => {
  console.log("GET at path: /api/all_music || host is: " + req.ip);
  connection.query(sql.all_music, (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(200).json({ status: "fail" });
      return ;
    } 
    var data = [];
    result.forEach((item) => {
      data.push({
        music_id: item.music_id,
        music_name: item.music_name,
      });
    });
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
});

app.get("/api/last_music", (req, res) => {
  console.log("GET at path: /api/last_music || host is: " + req.ip);
  connection.query(sql.last_music(5), (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(200).json({ status: "fail" });
      return ;
    }
    var data = [];
    result.forEach((item) => {
      data.push({
        music_id: item.music_id,
        music_name: item.music_name,
      });
    });
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
});

app.get("/api/music", (req, res) => {
  console.log("GET at path: /api/music || host is: " + req.ip);
  connection.query(sql.music(req.query.id), (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(200).json({ status: "fail" });
      return ;
    }
    res.status(200).json({
      status: "success",
      data: {
        music_id: result[0].music_id,
        music_name: result[0].music_name,
      },
    });
  });
});

app.get("/api/collect_list", (req, res) => {
  console.log("GET at path: /api/collect_lst || host is: " + req.ip);
  connection.query(sql.collect_list, (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(200).json({ status: "fail" });
      return ;
    }
    var data = [];
    result.forEach((item) => {
      data.push({
        list_id: item.list_id,
        list_name: item.list_name,
      });
    });
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
});

app.post("/api/list", (req, res) => {
  console.log("POST at path: /api/list || host is: " + req.ip);
  const listName = req.body.list_name;
  connection.query(sql.list(listName), (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(200).json({ status: "fail" });
      return ;
    }
    var data = [];
    result.forEach((item) => {
      data.push({
        music_id: item.music_id,
        music_name: item.music_name,
      });
    });
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
});

app.get("/api/status", (req, res) => {
  console.log("GET at path: /api/status || host is: " + req.ip);
  connection.query(sql.status(req.query.id), (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(200).json({ status: "fail" });
      return ;
    }
    var data = [];
    result.forEach((item) => {
      data.push({
        list_id: item.list_id,
        list_name: item.list_name,
      });
    });
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
});

app.post("/api/add", (req, res) => {
  console.log("POST at path: /api/add || host is: " + req.ip);
  const musicID = req.body.music_id;
  const listID = req.body.list_id;
  const listName = req.body.list_name;
  connection.query(sql.add(musicID, listID, listName), (err, result) => {
    if (err) {
      console.error(err.message);
      if (err.code === "ER_DUP_ENTRY") {
        res.status(200).json({
          status: "error",
          statement: "already_exist",
        });
        return ;
      } else {
        res.status(200).json({ status: "fail" });
        return ;
      }
    }
    connection.query(sql.status(musicID), (err, result) => {
      if (err) {
        console.error(err.message);
        res.status(200).json({ status: "fail" });
        return ;
      }
      var data = [];
      result.forEach((item) => {
        data.push({
          list_id: item.list_id,
          list_name: item.list_name,
        });
      });
      res.status(200).json({
        status: "success",
        data: data,
      });
    });
  });
});

app.post("/api/remove", (req, res) => {
  console.log("POST at path: /api/remove || host is: " + req.ip);
  const musicID = req.body.music_id;
  const listID = req.body.list_id;
  const listName = req.body.list_name;
  connection.query(sql.remove(musicID, listID, listName), (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(200).json({ status: "fail" });
      return ;
    }
    connection.query(sql.status(musicID), (err, result) => {
      if (err) {
        console.error(err.message);
        res.status(200).json({ status: "fail" });
        return ;
      }
      var data = [];
      result.forEach((item) => {
        data.push({
          list_id: item.list_id,
          list_name: item.list_name,
        });
      });
      res.status(200).json({
        status: "success",
        data: data,
      });
    });
  });
});

app.post("/api/upload_music", 
  multer({ storage: config.storage_for_music }).array("music", 2), 
  (req, res) => {
    console.log("POST at path: /api/upload_music || host is: " + req.ip);
    const musicName = req.body.music_name;
    connection.query(sql.upload_music(musicName), (err, result) => {
      if (err) {
        console.error(err.message);
        res.status(200).json({ status: "fail" });
        return ;
      }
      connection.query(sql.last_music(1), (err, result) => {
        if (err) {
          console.error(err.message);
          res.status(200).json({ status: "fail" });
          return ;
        }
        res.status(200).json({
          status: "success",
          data: {
            music_id: result[0].music_id,
            music_name: result[0].music_name,
          },
        });
      });
    });
});

app.post("/api/new_list", 
  multer({ storage: config.storage_for_list }).single("list"),
  (req, res) => {
    console.log("POST at path: /api/new_list || host is: " + req.ip);
    const listName = req.body.list_name;
    connection.query(sql.new_list(listName), (err, result) => {
      if (err) {
        console.error(err.message);
        res.status(200).json({ status: "fail" });
        return ;
      }
      res.status(200).json({
        status: "success",
        data: {
          list_id: result[0].list_id,
          list_name: result[0].list_name,
        },
      });
    });
});

app.post("/api/update_music_image", 
  multer({ storage: config.storage_for_update_music_image }).single("music_image"),
  (req, res) => {
    console.log("POST at path: /api/update_music_image || host is: " + req.ip);
    res.status(200).json({
      status: "success",
    });
});

app.post("/api/update_list_image",
  multer({ storage: config.storage_for_update_list_image }).single("list_image"),
  (req, res) => {
    console.log("POST at path: /api/update_list_image || host is: " + req.ip);
    res.status(200).json({
      status: "success",
    });
});

// ============== 404 and 500 ===================
app.use((err, req, res, next) => {
  if (err.name === "TypeError" && err.message === "wrong_file_type") {
    console.error("wrong_file_type");
    res.status(200).json({
      status: "error",
      statement: "wrong_file_type",
    });
  } else if (err.name === "CoverageNotAllowed" && err.message === "coverage_not_allowed") {
    console.error("coverage_not_allowed");
    res.status(200).json({
      status: "error",
      statement: "coverage_not_allowed",
    });
  } else {
    console.error("500 - Server Error");
    console.error(err);
    res.status(500);
    res.sendFile(path.join(__dirname, "view/common/500.html"));
  }
});

// ================= port ======================
app.listen(config.PORT, () => {
  console.log("Listen at " + config.PORT);
});