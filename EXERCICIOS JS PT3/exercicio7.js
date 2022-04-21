/*[ ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. 

Você deve enviar como argumentos da função:
- Valor inicial investido 
- Valor atual do investimento 
- Tempo em meses, que o valor está investido

- A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. 
Siga a formula desse vídeo para te auxiliar com o cálculo.

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo
https://www.youtube.com/watch?v=lhJJX69I8ak&ab_channel=Fl%C3%A1vioMoita */

const investment = (valor1,valor2,timeInMonths) => {
    const result = ((valor2 - valor1) / valor1 * timeInMonths).toFixed(1)
    {console.log (`O valor da taxa mensal de juros é de ${result}%.`)}
    
}
investment (1000,1200,12)