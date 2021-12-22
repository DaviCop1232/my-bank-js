const Conta = require('./Conta.js');
const Agencia = require('./Agencia.js');
const md5 = require('md5'),
sqlite3 = require('sqlite3').verbose();

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

    RetornarConta(numero, agencia, senha){
        //parar de ser preguiçoso e melhorar isso depois que ta uma merda.
        var sql = "SELECT * FROM contas WHERE numero='"+numero+"' AND agencia ='"+agencia+"' AND senha='"+senha+"';";

        this.DBBanco.run(sql, function(err) {
            if (err) {
              return console.error(err.message);
            }

            console.log(`Conta Encontrada!`);
            var tConta = RetornarDadosConta("numero",numero,senha);
            var tAgencia = RetornarDadosConta("agencia",agencia,senha);
            var tCliente = RetornarDadosConta("cliente",agencia,senha);
            var tSenha = RetornarDadosConta("senha",agencia,senha);
            var tSaldo = RetornarDadosConta("saldo",agencia,senha);
            
            tCliente = new Conta(tNumero, tAgencia, tCliente, tSenha, tSaldo);
            return tCliente;
        });

    }

    RetornarDadosConta(dado,numero, agencia,senha){
        return this.DBBanco.run("SELECT "+dado+" FROM contas WHERE numero='"+numero+"' AND agencia ='"+agencia+"' AND senha='"+senha+"';");
    }

    RegistrarConta(conta){
        //parar de ser preguiçoso e colocar um trycatch... um dia... quem sabe
        var sql = "INSERT INTO contas (conta, agencia, cliente, senha, saldo) VALUES ('" + 
        conta.numero + "','" + 
        conta.agencia.numero + "','" + 
        conta.cliente.clienteId + "','" + 
        conta.senha  + "','" + 
        conta._saldo + "');";

        
        
        this.DBBanco.run(sql, function(err) {
            if (err) {
              return console.error(err.message);
            }

            console.log(`Conta Registrada`);
        });



    }}

    RegistrarAgencia(agencia){
      var sql = "INSERT INTO agencias (endereco, telefone, nome) VALUES ('" + 
      agencia.endereco + "','" + 
      agencia.telefone + "','" + 
      agencia.nome + "');";

      
      
      this.DBBanco.run(sql, function(err) {
          if (err) {
            return console.error(err.message);
          }

          console.log(`Agencia Registrada`);
      });



  }}



    RetornarDadosAgencia(agencia, dado){
      return this.DBBanco.run("SELECT "+dado+" FROM agencias WHERE agencia ='"+agencia+"';");
    }


module.exports = Sistema;