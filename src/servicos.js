const express = require('express');

// Import das bibliotecas próprias
const {
    getMensagem, setMensagem,
    setMensagemQuery, setMensagemPath,
} = require("./mensagemrecurso");

// Inicializa o roteador dos serviços
const router = express.Router();
router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "mensagem": "API Mensagem Rodando"
    })
});

router.get('/mensagem', getMensagem);
router.post('/mensagem', setMensagem);
router.get('/mensagemquery', setMensagemQuery);
router.get('/mensagempath/:mensagem', setMensagemPath);

// Exporta o roteador
module.exports = router;