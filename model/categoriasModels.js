const categorias = [{categoria:"Terror", filmes:1},{ categoria:"Romance", filmes:2}, {categoria:"Comédia", filmes:0}];

const listarTodos = () => {
  return [...categorias];
};

const listarId = (id) => {
  if (categorias.length >= id) {
    console.log("categoria inexistente");
    return "nao existe essa categoria, tente novamente!";
  } else {
    return categorias[id];
  }
};

const addCategoria = (novoNome) => {
  categorias.push(novoNome);
  return { id: categorias.length - 1, categoria: novoNome,  };
};

const removerCategoria = (id) => {
  const categoriaAntiga = categorias.splice(id, 1);
  return [categoriaAntiga];
};

const atualizarCategoria = (id, novo)=>{
    categorias[id] = novo
    return categorias[id]
}
module.exports = { listarTodos, listarId, addCategoria, removerCategoria, atualizarCategoria };
