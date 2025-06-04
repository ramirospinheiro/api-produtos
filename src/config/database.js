//pasta para configurar e conectar o sequelize ao BD
//sequelize é a ORM que vamos utilizar: npm install sequelize

require('dotenv').config();
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT
    }
)

module.exports = sequelize;