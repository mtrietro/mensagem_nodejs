const Mensagem = require("./mensagem");

/* Gera saída em JSON da mensagem. */
const getMensagem = async (request, response) => {
    console.log("Executando serviço getMensagem.");

    // Instancia a mensagem
    const mensagem = Mensagem.getInstancia();
    response.status(200).json({ mensagem: mensagem.getMensagem() });
};

/* Modifica a mensagem através dos dados da requisição recebidos 
como parâmetro de corpo do tipo JSON. */
const setMensagem = async (request, response) => {
    console.log("Executando serviço setMensagem.");

    const mensagemParam = request.body.mensagem // Recupera os parâmetros
    const mensagem = Mensagem.getInstancia(); // Instancia a mensagem
    mensagem.setMensagem(mensagemParam); // Modifica a mensagem
    response.status(200).json({ mensagem: mensagemParam }); // Retorno da mensagem
};

/* Modifica a mensagem através de dados da requisição recebidos 
como parâmetro de consulta na URL. */
const setMensagemQuery = async (request, response) => {
    console.log("Executando serviço setMensagemQuery.");

    const mensagemQuery = request.query.mensagem // Recupera os parâmetros
    console.log("mensagemQuery: " + mensagemQuery)
    const mensagem = Mensagem.getInstancia(); // Instancia a mensagem
    mensagem.setMensagem(mensagemQuery); // Modifica a mensagem
    response.status(200).json({ mensagem: mensagemQuery }); // Retorno da mensagem
};

/* Modifica a mensagem através de dados da requisição recebidos 
como parâmetro de path na URL. */
const setMensagemPath = async (request, response) => {
    console.log("Executando serviço setMensagemPath");
    const mensagemPath = request.params.mensagem // Recupera os parâmetros
    console.log("mensagemPath: " + mensagemPath)
    const mensagem = Mensagem.getInstancia(); // Instancia a mensagem
    mensagem.setMensagem(mensagemPath); // Modifica a mensagem
    response.status(200).json({ mensagem: mensagemPath }); // Retorno da mensagem
};

// Exporta as funções
module.exports = {
    getMensagem,
    setMensagem,
    setMensagemQuery,
    setMensagemPath
};