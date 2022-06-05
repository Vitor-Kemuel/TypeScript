let button = document.getElementById("button");
let input01 = document.getElementById("input01");
let input02 = document.getElementById("input02");

function soma(num01, num02) {
    if (typeof num01 === "number" && typeof num02 === "number") {
        return num01 + num02;
    } else {
        return Number(num01) + Number(num02);
    }
}

button.addEventListener("click", () => {
    console.log(soma(input01.value, input02.value))
})