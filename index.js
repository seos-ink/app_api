const express = require('express'); // requisição do express
const cors = require('cors'); // requisição do cors
const sequelize = require('./app/rNative-api/app/db/database'); // requisição do sequelize
const app = express(); // criação da instância do express

const port = 4000; // definição da porta do servidor

// 2. ativação do cors p/ permitir acesso as rotas
app.use(cors({
    origin: '*', // p/ acesso de qualquer origem
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json()); // p/ permitir o uso de json nas requisições

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
    res.json({ message: "Porta executada: " + port, dados: "12345678987654321" }); // resposta da rota
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

// ------------------- teste (se der errado, apagar dps)
app.get('/usuarios', async (req, res) => {
    try {
        console.log("\nAttempting to connect to the database...");
        const connection = await sequelize.authenticate();
        console.log("\nConnected to db_apiconnect.");

        
        const results = await sequelize.query("SELECT * FROM usuarios");

        console.log("\nRetrieving data from database...");
        
        const usuarios = results[0].map(usuario => ({
            id: usuario.id,
            nome: usuario.name,
            email: usuario.email,
            status: usuario.status
        }));

        const userListing = [
            { id: 1, nome: usuarios[usuarios.id].nome, email: usuarios[1].email, status: usuarios[1].status },
        ];


        // const [results, metadata] = await sequelize.query("SELECT * FROM usuarios");
        // const usuarios = results.map(usuario => ({
        //     id: usuario.id,
        //     nome: usuario.name,
        //     email: usuario.email,
        //     status: usuario.status
        // }));

        // const userListing = [
        //     {   id: 1,
        //         name: usuarios.name, 
        //         email: usuarios.email, 
        //         status: usuarios.status
        //     },
        //     {}
        // ];

        res.json(userListing);
        console.log("\nData retrieved from database.");
       // res.json(usuarios);

    } catch (error) {
        console.error("Database connection error: ", error);
        res.status(500).json({ error: "Database connection was blocked by an error: " + error.message })
    }
})

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("API running at port " + port + "...");
    })
})
// -------------------------------------------

app.listen(port, (error) => { // definição da porta de escuta do servidor
    if (error) {
        console.log('Server is not working/responding: \n', error);
    } else {
        console.log('Running server at port ' + port + '...');
    }
})
// para executar o servidor, usar o comando: node index.js