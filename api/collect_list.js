const sql = require("../config/sql");

const collect_list = (connection, req, res) => {
  console.log("GET at path: /api/collect_list || host is: " + req.ip);
  connection.query(sql.collect_list(), (err, result) => {
    if (err) {
      const error = new Error();
      error.name = "DBSelectError";
      error.message = err.message;
      throw error;
    }
    var data = [];
    result.forEach((item) => {
      data.push({
        list_id: item.list_id,
        list_name: item.list_name,
        list_msg: item.list_msg,
      });
    });
    res.status(200).json({
      status: "success",
      code: 100,
      statement: "success",
      data: data,
    });
  });
};

module.exports = collect_list;