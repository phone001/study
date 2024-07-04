const config = require("./config");
const Sequelize = require("sequelize");

const _sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev);

const db = {}
console.log(db)
const entities = ["../User.entity"];
entities.forEach((path, index) => {
    const model = require(path);
    model.init(_sequelize);
    db[model.name] = model;
})

db.sequelize = _sequelize;
module.exports = db;