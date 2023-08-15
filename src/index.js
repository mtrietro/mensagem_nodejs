constcom: express = require('express');
const cors = require('cors');

const app = express(); // Inicializa o servidor
const port = 8000; // Define a porta do servidor
app.use(cors()); // Executar em uma mesma máquina
app.use(express.json()); // Tipo da saída
const rotas = require("./servicos"); // Rotas da mensagem
app.use(rotas); // Carrega os serviços

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor ouvindo porta ${port}`);
});