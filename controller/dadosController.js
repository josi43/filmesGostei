const express = require("express");
const models = require("../model/dadosModels");

const listarTodos = (req, res) => {
  const dados = models.listar();
  return res.json({ "lista com todos os filmes assistidos": dados });
};
const listarId = (req, res) => {
  const { id } = req.params;
  const nomeProcurado = models.listarId(id);
  if (nomeProcurado == undefined) {
    res.status(404).end();
  } else {
    return res.json({ nome: nomeProcurado });
  }
};

const adicionar = (req, res) => {
  const nome = req.body;
  const addFilme = models.adicionar(nome);
  return res.json(addFilme);
};

const editar = (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  const {nota} =req.body;
  const filmeEditado = models.editar(id, nome, nota);
  return res.json(filmeEditado);
};

const deletar = (req, res) => {
  const { id } = req.params;
  const filmeDeletado = models.deletar(id);
  return res.json({ msg: "O filme: foi deletado com sucesso", filmeDeletado });
};

module.exports = { listarTodos, listarId, adicionar, editar, deletar };
