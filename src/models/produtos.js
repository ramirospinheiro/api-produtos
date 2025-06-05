const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const Produtos = sequelize.define('Produtos', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    preco:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    categoria:{
        type: DataTypes.STRING,
        allowNull: false
    },
    imagem_url:{
        type: DataTypes.TEXT
    }
})

module.exports = Produtos