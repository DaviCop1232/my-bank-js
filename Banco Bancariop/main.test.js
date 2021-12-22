const { jest } = require('@jest/globals');

const md5 = require('md5'),
sqlite3 = require('sqlite3').verbose(),
conta = require('./conta.js'),
Sistema = require('./sistema.js');

test('Banco Cria a Primeira Conta e a registra no banco de dados', () => {
    const sys = new Sistema();
    var registroTeste = new conta;
    registroTeste.conta = 0000001;
    registroTeste.agencia = 000;
    registroTeste.proprietario = "Banco Alfredo Alfredinho";
    registroTeste.cpf = 67097842075;
    registroTeste.senha = md5("SenhaSegura123");
    registroTeste.saldo = 1000000000
    sys.RegistrarConta(registroTeste);
});