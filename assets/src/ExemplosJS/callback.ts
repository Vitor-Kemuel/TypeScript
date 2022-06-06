function somaCallback(num01: number, num02: number, callback: (number: number) => number): number {
    let resultado = num01 + num02
    return callback(resultado)
}

function aoQuadrado(number: number): number {
    return number * number
}

console.log(somaCallback(1, 5, aoQuadrado))
