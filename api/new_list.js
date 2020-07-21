const sql = require("../config/sql");

const new_list = (connection, req, res) => {
  console.log("POST at path: /api/new_list || host is: " + req.ip);
  const list_name = req.body.list_name;
  const list_msg = req.body.list_msg;
  if (list_name) {
    connection.query(sql.new_list_search(list_name), (err, result) => {
      if (err) {
        const error = new Error();
        error.name = "DBSelectError";
        error.message = err.message;
        throw error;
      } else {
        if (result && result.length !== 0) {
          const error = new Error();
          error.name = "DataAlreadyExist";
          error.message = "data_already_exist";
          throw error;
        } else {
          connection.query(sql.new_list(list_name, list_msg), (err, result) => {
            if (err) {
              const error = new Error();
              error.name = "DBInsertError";
              error.message = err.message;
              throw error;
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