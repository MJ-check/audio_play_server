// POST 方法的请求数据格式错误
const error_201 = {
  status: "error",
  code: 201,
  statement: "post_body_error",
};
// 文件名为空错误
const error_202 = {
  status: "error",
  code: 202,
  statement: "file_name_null",
}
// 数据库插入的数据已存在
const error_210 = {
  status: "error",
  code: 210,
  statement: "data_already_exist",
};
// 上传的文件格式错误，文件格式规定必须为 audio/mp3 或者 image/png
const error_221 = {
  status: "error",
  code: 221,
  statement: "wrong_file_type",
};
// 文件不允许覆盖上传
const error_222 = {
  status: "error",
  code: 222,
  statement: "coverage_not_allowed",
};
// 查询文件是否存在错误，这时候需要删除已经保存的文件
const error_223 = {
  status: "error",
  code: 223,
  statement: "file_error",
}
// 数据库查询错误
const error_251 = {
  status: "error",
  code: 251,
  statement: "db_select_error",
};
// 数据库插入错误，不包括数据已存在的情况
const error_252 = {
  status: "error",
  code: 252,
  statement: "db_insert_error", 
};
// 	数据库删除错误，数据可能没有删除成功
const error_253 = {
  status: "error",
  code: 253,
  statement: "db_delete_error",
};
// 数据库创建表错误
const error_254 = {
  status: "fail",
  code: 254,
  statement: "db_create_error",
};
// 数据库更新失败
const error_255 = {
  status: "error",
  code: 255,
  statement: "db_update_error",
}
// 	未知服务器错误
const error_300 = {
  status: "error",
  code: 300,
  statement: "unknown_server_error",
};

module.exports = {
  error_201,
  error_202,
  error_210,
  error_221,
  error_222,
  error_223,
  error_251,
  error_252,
  error_253,
  error_254,
  error_255,
  error_300,
}