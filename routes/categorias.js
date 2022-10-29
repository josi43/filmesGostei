const express = require('express')
const router = express.Router();
const controller = require('../controller/categoriasControlles')

router.get('/', controller.listarTodos)
router.get('/:id', controller.listarId)
router.post('/criar', controller.addCategoria)
router.put('/editar/:id', controller.atualizarCategoria)
router.delete('/deletar/:id', controller.removerCategoria)

module.exports = router