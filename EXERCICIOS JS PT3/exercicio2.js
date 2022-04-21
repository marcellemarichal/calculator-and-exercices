/* [ ] Escreva um programa onde você chame uma função enviando um número (aceitar somente valores entre 1 e 10) 
e escrever a tabuada de 1 a 10 do valor lido. - Se mandar um número menor que 1 ou maior que 10, precisa aparecer 
uma mensagem de erro "número não aceito". Novamente um for. Se o número escolhido for 7, por exemplo, preciso 
imprimir a tabuada do 7 inteira:
1x7 = 7
2x7 = 14
3x7 = 21 */ 

const table = (number) => {
    if (number > 10 || number < 1) {
        console.log('Número não aceito. Aceitamos somente números entre 1 a 10')
        return
    }

    for (let i = 1; i <= 10; i++){
        console.log(`${i}x${number}=${i*number}`)
    }
}
table(9)

