let button = document.getElementById("button");
let input01 = document.getElementById("input01") as HTMLInputElement;
let input02 = document.getElementById("input02") as HTMLInputElement;

function soma(num01: number, num02: number) {
    return num01 + num02;

}
if (button) {
    button.addEventListener("click", () => {
        if (input01 && input02) {
            console.log(soma(Number(input01.value), Number(input02.value)))
        }
    })
}