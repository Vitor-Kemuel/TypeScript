let valueAny: any
valueAny = 3
valueAny = "teste"
valueAny = true

let valueString01: string
valueString01 = valueAny

let valueString02: string
valueString02 = valueString01

function somarStrings(string01: string, string02: string) {
    console.log(string01 + string02)
}

somarStrings(valueString01, valueString02)