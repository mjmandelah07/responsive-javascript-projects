let firstInput;
let secondInput;
let result;
let operators

// function to perform the operation
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


// function to get the operator value
function operatorValue() {
    operators = document.getElementById('operator').value;
 }


 // function to get and validate the text input value
function textValidate() {
    let x = parseInt(document.getElementById("firstNum").value.trim());
    let y = parseInt(document.getElementById("secondNum").value.trim());

    let errorMsg;
    // check if inouts are empty or  is numbers or less than 1
    if (isNaN(x) && isNaN(y) || x && y < 1 && x || y === "" ) {
        errorMsg = "Enter numbers above 0";
    }else {
        firstInput = x;
        secondInput = y;
        errorMsg = "Correct Inputs";
        // call the function to calculate if the input are correct and return the result
        document.getElementById("show-result").innerHTML = calculate(firstInput, secondInput);
    }
    document.getElementById("demo").innerHTML = errorMsg;

}
