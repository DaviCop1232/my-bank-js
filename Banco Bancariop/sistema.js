const Conta = require('./conta.js');

const md5 = require('md5'),
sqlite3 = require('sqlite3').verbose(),
conta = require('./conta.js');

class Sistema{
    constructor(){
        this.DBBanco = null;
    }

    ConectarDBBanco(){
        this.DBBanco = new sqlite3.Database('./db/DBBanco.db', sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
              console.error(err.message);
            }
            console.log('Conectado ao Banco De Dados das Contas.');
          });
    }

    DesconectarDBBanco(){
        this.DBBanco.close((err) => {
            if (err) {
              console.error(err.message);
            }
            console.log('Conexão com o Banco de Dados das Contas fechada.');
          });
    }

    AcessarConta(conta, agencia, senha){
        //parar de ser preguiçoso e melhorar isso depois que ta uma merda.
        var sql = "SELECT * FROM contas WHERE conta='"+conta+"' AND agencia ='"+agencia+"' AND senha='"+senha+"';";

        this.DBBanco.run(sql, function(err) {
            if (err) {
              return console.error(err.message);
            }

            console.log(`Conta Encontrada!`);
            var tConta = RetornarDadosConta("conta",agencia,senha);
            var tAgencia = RetornarDadosConta("agencia",agencia,senha);
            var tProprietario = RetornarDadosConta("proprietario",agencia,senha);
            var tCpf = RetornarDadosConta("cpf",agencia,senha);
            var tSenha = RetornarDadosConta("senha",agencia,senha);
            var tSaldo = RetornarDadosConta("saldo",agencia,senha);
            
            tCliente = new Conta(tConta, tAgencia, tProprietario, tCpf, tSenha, tSaldo);
            return tCliente;
        });

    }

    RetornarDadosConta(dado,conta, agencia,senha){
        return this.DBBanco.run("SELECT"+dado+" FROM contas WHERE conta='"+conta+"' AND agencia ='"+agencia+"' AND senha='"+senha+"';");
    }

    RegistrarConta(cliente){
        //parar de ser preguiçoso e colocar um trycatch... um dia... quem sabe
        var sql = "INSERT INTO contas (conta, agencia, proprietario, cpf, senha, saldo) VALUES ('" + cliente.getConta() + "','" + 
        cliente.getAgencia() + "','" + 
        cliente.getProprietario() + "','" + 
        cliente.getCpf()  + "','" + 
        cliente.getSenha()  + "','" + 
        cliente.getSaldo() + "');";

        
        
        this.DBBanco.run(sql, function(err) {
            if (err) {
              return console.error(err.message);
            }

            console.log(`Cliente Registrado`);
        });



}}


module.exports = Sistema;