const express = require('express');
const app = express();
const PORT = 3000;
const db = require("./db/coonnection")

app.listen(PORT, function() {
console.log('Servidor rodando na porta ${PORT}');
});

//routes
app.get('/',(req, res)=>{
res.send('Está rodando');
});

//conexao banco
db
    .authenticate()
    .then(() => {
        console.log('Conexão sucedida!');
    })
    .catch(err => {
        console.log('Não foi possível conectar:', err);
    });