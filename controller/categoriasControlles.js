const models = require("../model/categoriasModels");

const listarTodos = (req, res) => {
  const lista = models.listarTodos();
  return res.json(lista);
};

const listarId = (req, res) => {
  const { id } = req.params;
  const categoriaSelecionada = models.listarId(id);
  return res.json(categoriaSelecionada);
};

const addCategoria = (req, res) => {
  const categoria = req.body;
  const novaCategoria = models.addCategoria(categoria);
  return res.json(novaCategoria);
};

const removerCategoria = (req, res) => {
  const { id } = req.params;
  const categoriaRemovida = models.removerCategoria(id);
  return res.json({ msg: "categoria removida com sucesso", categoriaRemovida });
};

const atualizarCategoria = (req,res) =>{
    const {id} = req.params;
    const atualizado = req.body;
    const mudar = models.atualizarCategoria(id, atualizado)
    return res.json(mudar)
}
module.exports = { listarTodos, listarId, addCategoria, removerCategoria, atualizarCategoria };
