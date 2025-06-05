const {Produtos} = require('../models')

async function getProdutos(req, res) {
    try {
        //findAll é função nativa do sequelize
        const produtos = await Produtos.findAll()

        return res.send(produtos)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao buscar produto(s)')
    }
}

async function createProduto(req,res){
    try {
        const produto = await Produtos.create(req.body)
        return res.status(201).send(produto)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao criar produto')
    }
}

async function deleteProduto(req, res){
    const {id} = req.params;
    try {
        //destroy é função nativa do sequelize
        await Produtos.destroy({
            where: {
                id: id
            }
        })

        return res.status(202).send('Produto deletado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao deletar produto')
    }
}

module.exports = {
    getProdutos,
    createProduto,
    deleteProduto
}