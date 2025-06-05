const { Users } = require('../models')
const bcrypt = require('bcrypt')

async function validateCreateUser(req, res, next){
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).send({error: 'Todos os campos são obrigatórios'})
    }


    if(name.length > 255){
        return res.status(400).send({error: 'Nome não pode ter mais de 255 caracteres'})
    }

    if(email.length > 255){
        return res.status(400).send({error: 'Email não pode ter mais de 255 caracteres'})
    }

    const existingUser = await Users.findOne({
        where: {
            email: email
        }
    })
    if(existingUser){
        return res.status(400).send({
            error: 'Email ja cadastrado'
        })
    }

    // criptografia de senha 10 vezes em loop
    const hashedPassword = await bcrypt.hash(password, 10)
    req.body.password = hashedPassword
    

    next()
}
module.exports = {
    validateCreateUser
}