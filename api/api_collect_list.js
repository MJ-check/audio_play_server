const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const api_collect_list = (connection, req, res) => {
  console.log("GET at path: /api/collect_lst || host is: " + req.ip);
  connection.query(sql.collect_list, (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(200).json(errorCode.error_251);
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
      code: 100,
      statement: "success",
      data: data,
    });
  });
};

module.exports = api_collect_list;