"use strict";
let button = document.getElementById("button");
let input01 = document.getElementById("input01");
let input02 = document.getElementById("input02");
function soma(num01, num02, printar, frase) {
    let resultado = num01 + num02;
    if (printar) {
        console.log(frase + resultado);
    }
    return num01 + num02;
}
let devePrintar = true;
let frase;
frase = "O valor é: ";
if (button) {
    button.addEventListener("click", () => {
        if (input01 && input02) {
            console.log(soma(Number(input01.value), Number(input02.value), devePrintar, frase));
        }
    });
}
