const fs = require('fs');
const path = require('path');
const Mongoose = require('mongoose');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.js')[env];
const config = require('../../db/config/config.js');

if (config.development.database.url) {
  Mongoose.connect(config.development.database.url, config.development.database.options);
  console.log("config.development.database.url : ", config.development.database.url);
} else if (config.database.config.dbName) {
  Mongoose.connect(`${config.database.protocol}://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}`, config.database.options);
} else {
  Mongoose.connect(`${config.database.protocol}://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.name}`, config.database.options);
}

const db = () => {
  const m = {};

  fs
    .readdirSync(__dirname)
    .filter(file => {
      console.log("reached here...");
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(path.resolve(__dirname, file))(Mongoose);
      m[model.modelName] = model;
    });

  return m;
}


const models = db();
const mongoose = Mongoose;

module.exports = mongoose;
module.exports.default = models;