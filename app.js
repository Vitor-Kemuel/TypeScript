"use strict";
function somaValor(input01, input02) {
    if (typeof input01 === "string" || typeof input02 === "string") {
        return input01.toString() + input02.toString();
    }
    else {
        return input01 + input02;
    }
}
console.log(somaValor(17, 5));
console.log(somaValor("Hello", ", how are you?"));
console.log(somaValor("Saldo restante: ", 14));
