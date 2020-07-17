const express = require("express");
const app = express();
const path = require("path");
const config = require("./config/config");
const getMachine = require("./utils/getMachine");

// ============= static source ================
app.use("/public/music", express.static(path.join(__dirname, "public/music")));
app.use("/public/image", express.static(path.join(__dirname, "public/image")));

app.use((req, res, next) => {
  if (getMachine(req) === "mobile") {
    //console.log("mobile");
    app.use("/", express.static(path.join(__dirname, "view/mobile")));
  } else {
    //console.log("pc");
    app.use("/", express.static(path.join(__dirname, "view/pc")));
  }
  next();
});

// =============== api ========================

// ============== 404 and 500 ===================
app.set((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "view/common/404.html"));
});

app.set((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.sendFile(path.join(__dirname, "view/common/500.html"));
});

// ================= port ======================
app.listen(config.PORT, () => {
  console.log("Listen at " + config.PORT);
});