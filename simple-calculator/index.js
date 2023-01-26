let firstInput;
let secondInput;
let result;
let operator;

// function to perform the operation
function calculate(input1, input2) {
    if (operator === 'add') {
        result = parseFloat(input1 + input2);
        return result;
    }else if (operator === 'subtract') {
        result = parseFloat(input1 - input2);
        return result;
    }else if (operator === 'divide') {
        if (input2 === 0) {
            result = "Cant divide by zero";
            return result;
        }else {
            result = parseFloat(input1 / input2);
            return result;
        }

    }else if (operator === 'multiply') {
        result = parseFloat(input1 * input2);
        return result;
    }
}


// function to get the operator value
function operatorValue() {
    operator = document.getElementById('operator').value;
 }


 // function to get and validate the text input value
function textValidate() {
    let x = parseFloat(document.getElementById("firstNum").value.trim());
    let y = parseFloat(document.getElementById("secondNum").value.trim());

    let errorMsg;
    // check if inouts are empty or  is numbers or less than 1
    if (isNaN(x) || isNaN(y) && x || y === "" ) {
        errorMsg = "Only numbers are allowed";
    }else {
        firstInput = x;
        secondInput = y;
        errorMsg = "Correct Inputs";
        // call the function to calculate if the input are correct and return the result
        document.getElementById("show-result").innerHTML = calculate(firstInput, secondInput);
    }
    document.getElementById("demo").innerHTML = errorMsg;

}
