"use strict";
const pessoa01 = {
    nome: "Mariana",
    idade: 19,
    profissao: "desenvolvedora"
};
const pessoa02 = {
    nome: "Pedro",
    idade: 21,
    profissao: "Vendedor"
};
const pessoa03 = {
    nome: "Julia",
    idade: 21,
    profissao: "pintora"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedor"] = 0] = "Desenvolvedor";
    Profissao[Profissao["Pintor"] = 1] = "Pintor";
    Profissao[Profissao["Vendedor"] = 2] = "Vendedor";
    Profissao[Profissao["Professor"] = 3] = "Professor";
})(Profissao || (Profissao = {}));
const pessoa04 = {
    nome: "José",
    idade: 32,
    profissao: Profissao.Professor
};
const pessoa05 = {
    nome: "Monica",
    idade: 25,
    profissao: Profissao.Desenvolvedor,
    materias: ["Desenvolvimento Web", "Banco de dados", "Segurança da informação"]
};
const pessoa06 = {
    nome: "Eduardo",
    idade: 20,
    materias: ["Desenvolvimento Web", "Banco de dados", "Segurança da informação"]
};
function listar(lista) {
    for (const item of lista) {
        console.log("- " + item);
    }
}
listar(pessoa06.materias);
