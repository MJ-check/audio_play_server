// api_all_music
const all_music = 
  "SELECT * FROM music " + 
  "ORDER BY music_id DESC;";

// api_last_music || api_upload_music
const last_music = (number) => {
  return (
    "SELECT * FROM music " + 
    "ORDER BY music_id DESC " +
    "LIMIT " + number + ";"
  );
};

// api_music
const music = (id) => {
  return (
    "SELECT * FROM music " + 
    "WHERE music_id=" + id + ";"
  );
};

// api_collect_list
const collect_list = 
  "SELECT * FROM collectlist " + 
  "ORDER BY list_id DESC;";

const list_name = (list_id) => {
  return (
    "SELECT list_name " + 
    "FROM collectlist " + 
    "WHERE list_id=" + list_id + ";"
  );
};

// api_list
const list = (list_name) => {
  return(
    "SELECT music.music_id, music_name " + 
    "FROM music " + 
    "INNER JOIN " + list_name + " " + 
    "ON music.music_id=" + list_name + ".music_id " + 
    "ORDER BY music_id DESC;"
  );
};

// api_status || api_add
const status = (music_id) => {
  return (
    "SELECT a.list_id, list_name " + 
    "FROM collectlist AS a " + 
    "INNER JOIN musicstatus AS b " + 
    "ON a.list_id=b.list_id " + 
    "WHERE music_id=" + music_id + " " + 
    "ORDER BY a.list_id DESC;"
  );
};

// api_add
const add = (music_id, list_id, list_name) => {
  return (
    "INSERT INTO musicstatus (music_id,list_id) " + 
    "VALUES (" + music_id + "," + list_id + "); " + 
    "INSERT INTO " + list_name + " (music_id) " + 
    "VALUES (" + music_id + ");"
  );
};

// api_remove
const remove = (music_id, list_id, list_name) => {
  return (
    "DELETE FROM musicstatus " + 
    "WHERE music_id=" + music_id + " AND " + "list_id=" + list_id + "; " + 
    "DELETE FROM " + list_name + " " + 
    "WHERE music_id=" + music_id + ";"
  );
};

// api_upload_music
const upload_music = (music_name) => {
  return (
    "INSERT INTO music (music_name) " + 
    "VALUES (\"" + music_name + "\");"
  );
};

// api_new_list
const new_list = (list_name) => {
  return (
    "INSERT INTO collectlist (list_name) " + 
    "VALUES (\"" + list_name + "\"); " + 
    "CREATE TABLE " + list_name + " ( " + 
    "id INT AUTO_INCREMENT, " + 
    "music_id INT, " + 
    "PRIMARY KEY ( id ) " + 
    ")CHARSET=utf8;"
  );
};

// api_new_list
const last_list = (number) => {
  return (
    "SELECT * FROM collectlist " + 
    "ORDER BY list_id DESC " + 
    "LIMIT " + number + ";"
  );
};

module.exports = { 
  all_music, 
  last_music,
  music,
  collect_list,
  list_name,
  list,
  status,
  add,
  remove,
  upload_music,
  new_list,
  last_list,
}