let any: any
any = 3
any = "teste"
any = 5

let stringTeste01: string = "verificar"
stringTeste01 = any

let unknow: unknown
unknow = 3
unknow = "teste"
unknow = true
unknow = "agora vai"

let stringTeste02: string = "verificar"
// stringTeste02 = unknow // <= erro

if (typeof unknow === "string") {
    stringTeste02 = unknow
}
