"use strict";
function somaCallback(num01, num02, callback) {
    let resultado = num01 + num02;
    return callback(resultado);
}
function aoQuadrado(number) {
    return number * number;
}
console.log(somaCallback(1, 5, aoQuadrado));
