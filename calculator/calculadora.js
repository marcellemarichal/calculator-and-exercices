/*CALCULADORA COM FUNCTIONS*/

const calculator = (number1, number2, operation) => {

    let result
    switch (operation) {
        case "+":
            result = number1 + number2
            
            break;

        case "-":
            result = number1 - number2
            
            break;

        case "*":
            result = number1 * number2
            
            break;

        case "/":
            result = number1 / number2
            
            break;

        default: result = number1 + number2
            break;
    }

    return result
}

console.log(calculator(1050,50,"+"))