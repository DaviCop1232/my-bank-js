const md5 = require('md5');

class Conta{
    constructor(conta, agencia, proprietario, cpf, senha, saldo){
        this.conta = conta;
        this.agencia = agencia;
        this.proprietario = proprietario;
        this.cpf = cpf;
        this.senha = md5(senha);
        this.saldo = saldo;
    }

    getConta() {
        return this.conta;
    }

    getAgencia(){
        return this.agencia;
    }
    
    getProprietario(){
        return this.Proprietario;
    }

    getCpf(){
        return this.Proprietario;
    }

    getSenha(){
        return this.senha;
    }

    setSenha(senha){
        this.senha = md5(senha);
    }

    getSaldo(){
        return this.saldo;
    }

    setSaldo(saldo){
        this.saldo = saldo;
    }

}

module.exports = Conta;