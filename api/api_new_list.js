const sql = require("../config/sql");
const errorCode = require("../config/errorCode");

const api_new_list = (connection, req, res) => {
  console.log("POST at path: /api/new_list || host is: " + req.ip);
  const listName = req.body.list_name;
  if (listName) {
    connection.query(sql.search_list(listName), (err, result) => {
      if (err) {
        console.error(err.message);
        res.status(200).json(errorCode.error_251);
        return ;
      }
      if (result.length !== 0 
        || listName === "music" 
        || listName === "collectlist" 
        || listName === "musicstatus"
      ) {
        console.error("ERROR: data_already_exist");
        res.status(200).json(errorCode.error_210);
        return ;
      }
      connection.query(sql.new_list(listName), (err, result) => {
        if (err) {
          console.error(err.message);
          res.status(200).json(errorCode.error_254);
          return ;
        }
        connection.query(sql.last_list(1), (err, result) => {
          if (err) {
            console.error(err.message);
            res.status(200).json(errorCode.error_251);
            return ;
          }
          res.status(200).json({
            status: "success",
            code: 100,
            statement: "success",
            data: {
              list_id: result[0].list_id,
              list_name: result[0].list_name,
            },
          });
        });
      });
    });
  } else {
    console.error("ERROR: post_body_error");
    res.status(200).json(errorCode.error_201);
    return ;
  }
};

module.exports = api_new_list;