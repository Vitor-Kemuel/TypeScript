const pessoa01 = {
    nome: "Mariana",
    idade: 19,
    profissao: "desenvolvedora"
}

const pessoa02: { nome: string, idade: number, profissao: string } = {
    nome: "Pedro",
    idade: 21,
    profissao: "Vendedor"
}

const pessoa03: { nome: string, idade: number, profissao: string } = {
    nome: "Julia",
    idade: 21,
    profissao: "pintora"
}

enum Profissao {
    Desenvolvedor,
    Pintor,
    Vendedor,
    Professor
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao,
}

const pessoa04: Pessoa = {
    nome: "José",
    idade: 32,
    profissao: Profissao.Professor
}

interface Estudante extends Pessoa {
    materias: string[]
}

const pessoa05: Estudante = {
    nome: "Monica",
    idade: 25,
    profissao: Profissao.Desenvolvedor,
    materias: ["Desenvolvimento Web", "Banco de dados", "Segurança da informação"]
}

const pessoa06: Estudante = {
    nome: "Eduardo",
    idade: 20,
    materias: ["Desenvolvimento Web", "Banco de dados", "Segurança da informação"]
}

function listar (lista: string[]) {
    for (const item of lista){
        console.log("- "+ item)
    }
}

listar(pessoa06.materias)