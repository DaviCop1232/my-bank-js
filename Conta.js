const md5 = require('md5');
const Cliente = require('./Cliente');
const Agencia = require('./Agencia');

class Conta{
    numero;
    agencia = new Agencia;
    cliente = new Cliente;
    senha;
    _saldo;
    constructor(numero, agencia, cliente, senha, saldo){
        this.numero = numero;
        this.agencia = agencia;
        this.cliente = cliente;
        this.senha = md5(senha);
        this._saldo = saldo;
    }

    get Senha(){
        return this.senha;
    }

    set Senha(senha){
        this.senha = md5(senha);
    }

    get Saldo(){
        return this.saldo;
    }

    set Saldo(saldo){
        this.saldo = saldo;
    }

}

module.exports = Conta;



/*
CREATE TABLE contas(
conta_id int AUTO_INCREMENT, 
numero int,
agencia int,
cliente int,
senha varchar,
saldo BOOL,
PRIMARY KEY (conta_id),
FOREIGN KEY (cliente) REFERENCES clientes(cliente_id),
FOREIGN KEY (agencia) REFERENCES agencias(agencia_id));

CREATE TABLE clientes(
cliente_id int AUTO_INCREMENT,
nome varchar,
cpf int,
endereco varchar,
telefone varchar,
PRIMARY KEY (cliente_id));

CREATE TABLE agencias(
agencia_id int AUTO_INCREMENT,
endereco varchar,
telefone varchar,
nome varchar,
PRIMARY KEY(agencia_id));

*/