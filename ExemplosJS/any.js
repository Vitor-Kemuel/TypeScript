"use strict";
let valueAny;
valueAny = 3;
valueAny = "teste";
valueAny = true;
let valueString01;
valueString01 = valueAny;
let valueString02;
valueString02 = valueString01;
function somarStrings(string01, string02) {
    console.log(string01 + string02);
}
somarStrings(valueString01, valueString02);
