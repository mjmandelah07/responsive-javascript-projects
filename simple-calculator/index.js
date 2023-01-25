let firstInput;
let secondInput;
let result;
let operators


function calculate(input1, input2) {
    if (operators === '+') {
        result = parseInt(input1 + input2);
        return result;
    }else if (operators === '-') {
        result = parseInt(input1 - input2);
        return result;
    }else if (operators === '/') {
        result = parseInt(input1 / input2);
        return result;
    }else if (operators === '*') {
        result = parseInt(input1 * input2);
        return result;
    }
}


function operatorValue() {
    operators = document.getElementById('operator').value;
 }


function textValidate() {
    let x = parseInt(document.getElementById("firstNum").value.trim());
    let y = parseInt(document.getElementById("secondNum").value.trim());

    let errorMsg;
    // check if inouts are empty and is numbers
    if (isNaN(x) && isNaN(y) || x && y < 1 && x || y === "" ) {
        errorMsg = "Enter numbers above 0";
    }else {
        firstInput = x;
        secondInput = y;
        errorMsg = "Correct Inputs";

        document.getElementById("show-result").innerHTML = calculate(firstInput, secondInput);
    }
    document.getElementById("demo").innerHTML = errorMsg;

}
