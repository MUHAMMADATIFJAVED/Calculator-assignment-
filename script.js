const resultInput = document.getElementById("result");

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    const lastChar = resultInput.value.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) {
        resultInput.value = resultInput.value.slice(0, -1) + operator;
    } else {
        resultInput.value += operator;
    }
}

function clearDisplay() {
    resultInput.value = "";
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculate() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch {
        resultInput.value = "Error";
    }
}
