//pasta middlewares contem verificações de requisição para detectar erros antes de conectar ao BD

//a função nativa do express "next" é a conexao com o controller: se tudo tiver certo => next
function validateCreateProduto(req, res, next){
    const {nome, categoria, preco, imagem_url} = req.body;

    if (!nome || !categoria || !preco || !imagem_url){
        return res.status(400).send('Todos os campos sao obrigatorios')
    }
    if (nome.length > 100){
        return res.status(400).send('Nome do produto não pode ter mais de 100 caracteres')
    }
    if (categoria.length > 50){
        return res.status(400).send('Categoria do produto não pode ter mais de 50 caracteres')
    }

    next();
} 

function validateDeleteProduto(req, res, next){
    const {id} = req.params;
    if (!id) {
        return res.status(400).send('Id do produto é obrigatoria')
    }
    next();
}

module.exports = {
    validateCreateProduto,
    validateDeleteProduto
}