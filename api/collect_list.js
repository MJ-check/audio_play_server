const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const collect_list = (pool, req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      console.log("ERROR: database_connection_error");
      res.status(200).json(errorCode.error_203);
      return ;
    } else {
      connection.query(sql.collect_list(), (err, result) => {
        if (err) {
          console.log(err);
          console.log("ERROR: db_select_error");
          res.status(200).json(errorCode.error_251);
          return ;
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
      connection.release();
    }
  });
};

module.exports = collect_list;