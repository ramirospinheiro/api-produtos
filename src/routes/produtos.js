const express = require('express')
const router = express.Router()
const produtosController = require('../controllers/produtos')
const produtosMiddleware = require('../middlewares/produtos')
const authMiddleware = require('../middlewares/auth')

router.get('/produtos',
    authMiddleware.validateToken, 
    produtosController.getProdutos
)

//middleware tem que estar no meio, senao vai criar produto antes de validar
router.post('/produtos',
    authMiddleware.validateToken,
    produtosMiddleware.validateCreateProduto,
    produtosController.createProduto
)

router.delete('/produtos/:id',
    authMiddleware.validateToken,
    produtosMiddleware.validateDeleteProduto,
    produtosController.deleteProduto
)


module.exports = router;