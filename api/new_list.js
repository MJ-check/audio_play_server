const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const new_list = (connection, req, res) => {
  console.log("POST at path: /api/new_list || host is: " + req.ip);
  const list_name = req.body.list_name;
  const list_msg = req.body.list_msg;
  if (list_name) {
    connection.query(sql.new_list_search(list_name), (err, result) => {
      if (err) {
        console.error("ERROR: db_select_error");
        res.status(200).json(errorCode.error_251);
        return ;
      } else {
        if (result && result.length !== 0) {
          console.error("ERROR: DataAlreadyExist");
          res.status(200).json(errorCode.error_210);
          return ;
        } else {
          connection.query(sql.new_list(list_name, list_msg), (err, result) => {
            if (err) {
              console.error("ERROR: db_insert_error");
              res.status(200).json(errorCode.error_252);
              return ;
            }
            res.status(200).json({
              status: "success",
              code: 100,
              statement: "success",
            });
          });
        }
      }
    });
  } else {
    const error = new Error();
    error.name = "PostBodyError";
    error.message = "post_body_error " + JSON.stringify(req.body);
    throw error;
  }
};

module.exports = new_list;