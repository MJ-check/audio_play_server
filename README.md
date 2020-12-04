# Audio Play Server

## 开放音乐平台后端服务项目

&emsp;&emsp;后端项目使用 nodejs + express + MySQL 搭建。目前项目版本为 V1.1 版本，后续会根据需求持续更新。

## 项目部署

1. 克隆项目到本地；

   ```powershell
   git clone https://github.com/MJ-check/audio_play_server
   ```

2. 安装项目依赖；

   ```powershell
   npm install
   // 或者使用 cnpm
   cnpm install
   ```

3. 配置数据库；

   ```sql
   create database audioplay;
   CREATE TABLE music (
       music_id INT AUTO_INCREMENT NOT NULL,
       music_name VARCHAR(40) NOT NULL,
       PRIMARY KEY ( music_id )
   )CHARSET=utf8;
   CREATE TABLE list (
       list_id INT AUTO_INCREMENT NOT NULL,
       list_name VARCHAR(25) NOT NULL,
       list_msg VARCHAR(210),
       PRIMARY KEY ( list_id )
   )CHARSET=utf8;
   CREATE TABLE sta (
       music_id INT NOT NULL,
       list_id INT NOT NULL,
       PRIMARY KEY ( music_id, list_id )
   )CHARSET=utf8;
   ```

   ## 相关项目链接

   Audio Play PC端项目：Audio Play Client

   <https://github.com/MJ-check/audio_play_client>

   Audio Play Mobile端项目：Audio Play Mobile

   <https://github.com/MJ-check/audio_play_mobile>