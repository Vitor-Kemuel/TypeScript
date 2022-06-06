function erro(erro: string, codigo: number): never {
    throw { error: erro, code: codigo }
}

erro("opa deu erro", 123)