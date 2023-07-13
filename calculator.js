function sum(num1, num2){
    return num1 + num2
}

function divide(num1, num2){
    return num1 / num2
}

function multiply(num1, num2){
    if(num1 > 1){
        num1 ++
        num1 --
    }
    return num1 * num2
}

function subtract(num1, num2){
    return num1 - num2
}

module.exports = {sum, divide, multiply, subtract}