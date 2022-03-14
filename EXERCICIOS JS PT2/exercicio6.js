// [ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const note = 1

switch (note){
    case 1:
        console.log('Faltou absolutamente tudo. Seu produto parece ter sido preparado ontem.')
    break

    case 2:
        console.log('Proposta fraca, só não recebeu uma nota menor porque a ideia é capaz de se desenvolver.')
    break

    case 3:
        console.log('Está ruim. A teoria é razoável, mas a prática não acompanhou.')
    break

    case 4: 
        console.log ('Sua ideia está 40% pronta, ainda precisa desenvolver muita coisa para ser considerada boa.')
    break

    case 5:
        console.log('Você está na metade do caminho, se esforce mais.')
    break

    case 6:
        console.log('Razoável. Até pode funcionar, mas faz apenas o mínimo. É necessário mais esforço para que a ideia seja considerada promissora.')
    break

    case 7:
        console.log('É uma boa ideia. Mas ainda tem diversos pontos para melhoria.')
    break

    case 8: 
        console.log ('Muito boa, quase tudo bem projetado, com exceção de alguns detalhes.')
    break

    case 9:
        console.log('Ótima ideia, só não é excelente por um único detalhe.')
    break

    case 10:
        console.log('Parabéns! Você recebeu a nota máxima, sua ideia está excelente.')
    break

    default:
        console.log('Nota não registrada')
    break
}