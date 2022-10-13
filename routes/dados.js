const express = require('express')
const router = express.Router()
const controller = require('../controller/dadosController')


router.get("/", function(req, res) {
    res.send(`Essa e a pagina inicial sem nada. Por favor utilize a URl correta!`);
  });
router.get('/listar', controller.listarTodos)
router.get('/listar/:id', controller.listarId)
router.post('/criar', controller.adicionar)
router.put('/editar/:id', controller.editar)
router.delete('/deletar/:id', controller.deletar)

module.exports = router