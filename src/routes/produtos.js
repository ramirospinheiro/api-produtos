const express = require('express')
const router = express.Router()
const produtosController = require('../controllers/produtos')
// importar middleware
const produtosMiddleware = require('../middlewares/produtos')

router.get('/produtos', produtosController.getProdutos)

//middleware tem que estar no meio, senao vai criar produto antes de validar
router.post('/produtos', produtosMiddleware.validateCreateProduto, produtosController.createProduto)

router.delete('/produtos/:id', produtosMiddleware.validateDeleteProduto, produtosController.deleteProduto)


module.exports = router;