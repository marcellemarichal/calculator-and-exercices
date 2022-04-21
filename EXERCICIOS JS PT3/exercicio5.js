/* [ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde 
qual número é maior */

const compare = (number1, number2) => {
    if (number1 > number2) {
        console.log(`O ${number1} é maior que o ${number2}`)
    }
    else if (number1 < number2) {
        console.log(`O ${number1} é menor que o ${number2}`)
    }

    else {
        console.log(`Os números são iguais`)
    }
}

compare(1909,1997)