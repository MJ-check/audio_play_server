const all_music = () => {
  return (
    "SELECT * FROM music " + 
    "ORDER BY music_id DESC;"
  );
};

const last_music = (number) => {
  return (
    "SELECT * FROM music " + 
    "ORDER BY music_id DESC " +
    "LIMIT " + number + ";"
  );
};

const music = (music_id) => {
  return (
    "SELECT * FROM music " + 
    "WHERE music_id=" + music_id + ";"
  );
};

const status = (music_id) => {
  return (
    "SELECT a.list_id, a.list_name " + 
    "FROM list AS a " + 
    "INNER JOIN sta AS b " + 
    "ON a.list_id = b.list_id " + 
    "WHERE music_id=" + music_id + " " + 
    "ORDER BY a.list_id DESC;"
  );
};

const add = (music_id, list_id) => {
  return (
    "INSERT INTO sta (music_id, list_id) " + 
    "VALUES (" + music_id + ", " + list_id + ");"
  );
};

const remove = (music_id, list_id) => {
  return (
    "DELETE FROM sta " + 
    "WHERE music_id=" + music_id + " AND " + "list_id=" + list_id + ";"
  );
};

const upload_music_search_music = (music_name) => {
  return (
    "SELECT * FROM music " +
    "WHERE music_name=\"" + music_name + "\";"
  );
};

const upload_music_insert_music = (music_name) => {
  return (
    "INSERT INTO music (music_name) " + 
    "VALUES (\"" + music_name + "\");"
  );
};

const upload_music_image_search = upload_music_search_music;

const collect_list = () => {
  return (
    "SELECT * FROM list " + 
    "ORDER BY list_id DESC;"
  );
};

const list = (list_id) => {
  return (
    "SELECT a.music_id, a.music_name " +
    "FROM music AS a " +
    "INNER JOIN sta AS b " +
    "ON a.music_id = b.music_id " +
    "WHERE list_id=" + list_id + " " + 
    "ORDER BY a.music_id DESC;"
  );
};

const new_list = (list_name, list_msg) => {
  return (
    "INSERT INTO list (list_name, list_msg) " +
    "VALUES (\"" + list_name + "\", \"" + list_msg + "\");"
  );
};

const upload_list_image_search = (list_name) => {
  return (
    "SELECT * FROM list " + 
    "WHERE list_name=\"" + list_name + "\";"
  );
};

const new_list_search = upload_list_image_search;

const update_list_msg = (list_id, list_new_msg) => {
  return (
    "UPDATE list SET list_msg=\"" + list_new_msg + "\" " + 
    "WHERE list_id=" + list_id + ";"
  );
};

module.exports = {
  all_music,
  last_music,
  music,
  status,
  add,
  remove,
  upload_music_search_music,
  upload_music_insert_music,
  upload_music_image_search,
  collect_list,
  list,
  new_list,
  upload_list_image_search,
  new_list_search,
  update_list_msg,
}