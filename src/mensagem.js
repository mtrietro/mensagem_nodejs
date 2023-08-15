class Mensagem {
    static instancia = null;
    constructor() {
        if (this.instancia) {
            throw new Error(`Não é possível criar a instância 
     da classe Mensagem com o construtor. Use o método
     estático getInstancia() em vez disso`);
        }
    }
    static getInstancia() {
        if (this.instancia == null) {
            this.instancia = new this();
            this.instancia.setMensagem("inicial");
        }
        return this.instancia;
    }

    getMensagem() {
        return this.mensagem;
    }

    setMensagem(mensagem) {
        this.mensagem = mensagem;
    }
}

// Exporta a classe
module.exports = Mensagem;