//arquivo com comandos SQL importaveis para utilização no resto do codigo
//obs: modelo de importação diferente pois NAO utiliza configuraçoes de biblioteca, e sim feito do 0

const pool = require('./database')

async function getProdutos(){
    const produtos =  await pool.query('SELECT * FROM produtos')

    return produtos.rows
}

// SOLID: modelo de organização de codigo, cada letra é uma boa pratica
async function createProduto(produto){
    try {
        const insertProduto = await pool.query(`
            INSERT INTO produtos 
            (nome, preco, categoria, imagem_url)
            VALUES ($1,$2,$3,$4)
            RETURNING *    
            `, [
            produto.nome,
            produto.preco,
            produto.categoria,
            produto.imagem_url    
            ]
        )
        return insertProduto.rows[0]
    } catch (error) {
        console.error(error)
        throw new Error('Erro ao criar produto')
    }
}



module.exports = {
    getProdutos,
    createProduto
}