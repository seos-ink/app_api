const express = require('express'); // requisição do express
const cors = require('cors'); // requisição do cors
const app = express(); // criação da instância do express

const port = 4000; // definição da porta do servidor

// criação da 1ª rota do servidor
app.get('/', (req, res) => {
    res.send('Hello World!'); // resposta da rota
})

// criação da 2ª rota do servidor
app.get('/sobre', (req, res) => {
    res.send('Rota Sobre do Projeto'); // resposta da rota
})

// 3ª rota - usando json
app.get('/dados', (req, res) => {
    res.json({ porta: "Porta executada: " + port, dados: "12345678987654321"}); // resposta da rota
})

// 4º rota - usando json
app.get('/lista', (req, res) => {
    const lista = [
        { id: 1, nome: 'Item 1' },
        { id: 2, nome: 'Item 2' },
        { id: 3, nome: 'Item 3' }
    ];
    console.log("Alguém acessou a lista!"); // exibe a lista no console do servidor
    res.json(lista); // resposta da rota
})


app.listen(port, (error) => { // definição da porta de escuta do servidor
    if (error) {
        console.log('Server is not working/responding: \n', error);
    } else {
        console.log('Running server at port ' + port  + '...');
    }
}) 
// para executar o servidor, usar o comando: node index.js