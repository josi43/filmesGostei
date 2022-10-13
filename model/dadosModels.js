const dados = [
  { nome: "It, a coisa", nota:10 },
  { nome: "Era uma vez", nota: 2 },
  { nome: "Razoes pra te esquecer", nota: 3 },
];

const listar = () => {
  return [...dados];
};

const listarId = (id) => {
  return dados[id];
};
const adicionar = (novoFilme) => {
  dados.push(novoFilme);
  return { id: dados.length - 1, nome: novoFilme };
};

const editar = (id, name, note) => {
  dados[id].nome = name;
  dados[id].nota= note
  return dados[id];
};

const deletar = (id) => {
  return dados.splice(id, 1);
};

module.exports = { listar, listarId, adicionar, editar, deletar };
