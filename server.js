const express = require('express')
const app = express();
const port = 3000

app.use(express.json());

const dados = require('./routes/dados')
app.use('/filmes', dados)

const categorias = require('./routes/categorias')
app.use('/categorias', categorias)

app.listen(port)