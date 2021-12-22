const { mainModule } = require('process');
const { func } = require('assert-plus');

const md5 = require('md5'),
sqlite3 = require('sqlite3').verbose(),
conta = require('./conta.js'),
Sistema = require('./sistema.js');


const sys = new Sistema();
Main();

function Main(){

}

function RegistrarConta(conta){
    sys.ConectarDBBanco();
    sys.RegistrarCliente(conta);
    sys.DesconectarDBBanco();
}

function testes(){
    var registroTeste = new conta(0000001, 000, "Banco Alfredo Alfredinho", 67097842075, "SenhaSegura123", 1000000000000.00)
    RegistrarConta(registroTeste);
}