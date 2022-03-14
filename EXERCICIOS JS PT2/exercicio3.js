//[ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
//Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
//Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

let firstNumber = (Math.floor(Math.random() * (11 - 1) + 1))

const calc = firstNumber

console.log(calc)

switch (calc) {
    case 1:
        console.log('Infelizmente esse não é o número ganhador. Tente novamente.')
    break

    case 2:
        console.log('Infelizmente esse não é o número ganhador. Tente novamente.')
    break

    case 3:
        console.log('Infelizmente esse não é o número ganhador. Tente novamente.')
    break

    case 4: 
        console.log ('Infelizmente esse não é o número ganhador. Tente novamente.')
    break

    case 5:
        console.log('Infelizmente esse não é o número ganhador. Tente novamente.')
    break

    case 6:
        console.log('Infelizmente esse não é o número ganhador. Tente novamente.')
    break

    case 7:
        console.log('Infelizmente esse não é o número ganhador. Tente novamente.')
    break

    case 8: 
        console.log ('Infelizmente esse não é o número ganhador. Tente novamente.')
    break

    case 9:
        console.log('Parabéns! Você encontrou o número da sorte.')
    break

    case 10:
        console.log('Infelizmente esse não é o número ganhador. Tente novamente.')
    break

    default:
        console.log('Número não encontrado')
    break
    
}