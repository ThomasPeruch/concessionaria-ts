"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, portas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = portas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
var carro1 = new Carro('uno', 2);
var carro2 = new Carro('corsa', 2);
var carro3 = new Carro('fiorino', 2);
var listaDeCarros = [carro1, carro2, carro3];
var concessionaria = new Concessionaria('Rua Senador Salgado Filho', listaDeCarros);
//console.log(concessionaria.mostrarListaDeCarros())
var pes = new Pessoa('Jao', 'uno');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == pes.dizerCarroPreferido()) {
        pes.comprarCarro(carro);
    }
});
console.log(pes.dizerCarroQueTem());
