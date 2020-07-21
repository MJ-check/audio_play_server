const all_music = 
  "SELECT * FROM music " + 
  "ORDER BY music_id DESC;";
const last_music = (number) => {
  return (
    "SELECT * FROM music " + 
    "ORDER BY music_id DESC " +
    "LIMIT " + number + ";"
  );
};
const music = (id) => {
  return (
    "SELECT * FROM music " + 
    "WHERE music_id=" + id + ";"
  );
};
const search_music = (music_name) => {
  return (
    "SELECT * FROM music " +
    "WHERE music_name=\"" + music_name + "\";"
  );
};
const collect_list = 
  "SELECT * FROM collectlist " + 
  "ORDER BY list_id DESC;";
const search_list = (list_name) => {
  return (
    "SELECT * FROM collectlist " + 
    "WHERE list_name=\"" + list_name + "\";"
  );
};
const list_name = (list_id) => {
  return (
    "SELECT list_name " + 
    "FROM collectlist " + 
    "WHERE list_id=" + list_id + ";"
  );
};
const list = (list_name) => {
  return(
    "SELECT music.music_id, music_name " + 
    "FROM music " + 
    "INNER JOIN " + list_name + " " + 
    "ON music.music_id=" + list_name + ".music_id " + 
    "ORDER BY music_id DESC;"
  );
};
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
const add = (music_id, list_id, list_name) => {
  return (
    "INSERT INTO musicstatus (music_id,list_id) " + 
    "VALUES (" + music_id + "," + list_id + "); " + 
    "INSERT INTO " + list_name + " (music_id) " + 
    "VALUES (" + music_id + ");"
  );
};
const remove = (music_id, list_id, list_name) => {
  return (
    "DELETE FROM musicstatus " + 
    "WHERE music_id=" + music_id + " AND " + "list_id=" + list_id + "; " + 
    "DELETE FROM " + list_name + " " + 
    "WHERE music_id=" + music_id + ";"
  );
};
const upload_music = (music_name) => {
  return (
    "INSERT INTO music (music_name) " + 
    "VALUES (\"" + music_name + "\");"
  );
};
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
  search_list,
  search_music,
}