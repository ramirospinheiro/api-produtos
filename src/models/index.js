//arquivo index dos models mantem o BD atualizado

const sequelize = require('../config/database')
const Users = require ('./users')
const Produtos = require ('./produtos')

// sequelize.sync se conecta ao banco e o mantem atualizado, alter: true da a liberdade de alterar o BD
sequelize.sync({ alter: true })
    .then(() => console.log('Tabelas sincronizdas com sucesso'))
    .catch((error) => console.error('Erro ao sincronizar tabelas', error))

module.exports = {
    Users,
    Produtos
}