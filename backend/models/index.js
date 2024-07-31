const Sequelize = require('sequelize'); // sequelize 패키지를 불러옴
const config = require(__dirname + '/../config/config.json')["development"]; // db 연결 정보
const db = {}; // 빈 객체 

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
); // sequelize 객체

const TodoModel = require('./Todo')(sequelize, Sequelize); 

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = TodoModel;

module.exports = db;