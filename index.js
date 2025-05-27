const express = require('express')
const app = express()
const port = 6579
const produtosDb = []
const usersDb = []

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Olá Fulano!")
})

app.post("/produtos", (req, res) => {
    const {nome, preco, categoria} = req.body

    if(!nome || !preco || !categoria){
        return(res.status(400).send("Nome, preco e categoria sao obrigatorios"))
    }

    const produto = {
        nome: nome,
        preco: preco,
        categoria: categoria
    }

    produtosDb.push(produto)

    res.status(201).send(produto)
})

app.post("/usuarios", (req, res) => {
    const {nome, email, senha} = req.body

    if(!nome || !email || !senha){
        return(res.status(400).send("Volte com as suas credenciais que a gente conversa"))
    }

    usersDb.push({nome, email, senha})

    res.status(201).send("Usuário cadastrado com sucesso")
})

app.get("/produtos", (req, res) => {
    res.send(produtosDb)
})

app.listen(port, () => {
    console.log(`O servidor esta rodando na porta ${port}`)
})