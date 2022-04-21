/*[ ] Escreva um programa onde você cria uma função geradora de desconto. 

- A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira 
    compra do cliente ou não, um booleano que diz se o cliente vai pagar a vista ou não)

- Os descontos funcionam da seguinte forma: 

    x- Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto 

    x- Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 
    => 25% de desconto     

    x- Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20% 

    x- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
    
    x- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 
    => 15% de desconto 

    x- Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

    x- Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto     

   x- Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 
   => 15% de desconto 

   x- Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

   x- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 
   
   x- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 
   => 5% de desconto 

   - Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO

- A função deve imprimir na tela: 

    - Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, 
    o valor total com desconto e a porcentagem de desconto que ele recebeu.       

    - Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra 
    e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra. */


    let discount = (clientName, purchaseAmount, isThisTheFirstPurchase, cashPayment) => {
        if (isThisTheFirstPurchase === true && cashPayment === true && purchaseAmount > 1000) {
            console.log(`Olá ${clientName}, obrigada pela compra! Você ganhou 30% de desconto e sua compra, que inicialmente teve o valor de ${purchaseAmount}, vai sair por ${(purchaseAmount * 70)/100}`)
        }
        if (isThisTheFirstPurchase===true && cashPayment === true && purchaseAmount < 1000 && purchaseAmount > 500) {
            console.log(`Olá ${clientName}, obrigada pela compra! Você ganhou 25% de desconto e sua compra, que inicialmente teve o valor de ${purchaseAmount}, vai sair por ${(purchaseAmount * 75)/100}`)
        }
        if (isThisTheFirstPurchase===true && cashPayment === true && purchaseAmount < 500) {
            console.log(`Olá ${clientName}, obrigada pela compra! Você ganhou 20% de desconto e sua compra, que inicialmente teve o valor de ${purchaseAmount}, vai sair por ${(purchaseAmount * 80)/100}`)
        }
        if (isThisTheFirstPurchase===true && cashPayment === false && purchaseAmount > 1000) {
            console.log(`Olá ${clientName}, obrigada pela compra! Você ganhou 20% de desconto e sua compra, que inicialmente teve o valor de ${purchaseAmount}, vai sair por ${(purchaseAmount * 80)/100}`)
        }
        if (isThisTheFirstPurchase===true && cashPayment === false && purchaseAmount < 1000 && purchaseAmount > 500) {
            console.log(`Olá ${clientName}, obrigada pela compra! Você ganhou 15% de desconto e sua compra, que inicialmente teve o valor de ${purchaseAmount}, vai sair por ${(purchaseAmount * 85)/100}`)
        }
        if (isThisTheFirstPurchase === true && cashPayment === false && purchaseAmount < 500) {
            console.log(`Olá ${clientName}, obrigada pela compra! Você ganhou 10% de desconto e sua compra, que inicialmente teve o valor de ${purchaseAmount}, vai sair por ${(purchaseAmount * 90)/100}`)
        }
        if (isThisTheFirstPurchase === false && cashPayment === true && purchaseAmount > 1000) {
            console.log(`Olá ${clientName}, obrigada pela compra! Você ganhou 20% de desconto e sua compra, que inicialmente teve o valor de ${purchaseAmount}, vai sair por ${(purchaseAmount * 80)/100}`)
        }
        if (isThisTheFirstPurchase ===false && cashPayment === true && purchaseAmount < 1000 && purchaseAmount > 500) {
            console.log(`Olá ${clientName}, obrigada pela compra! Você ganhou 15% de desconto e sua compra, que inicialmente teve o valor de ${purchaseAmount}, vai sair por ${(purchaseAmount * 85)/100}`) 
        }
        if (isThisTheFirstPurchase === false && cashPayment === true && purchaseAmount < 500) {
            console.log(`Olá ${clientName}, obrigada pela compra! Você ganhou 10% de desconto e sua compra, que inicialmente teve o valor de ${purchaseAmount}, vai sair por ${(purchaseAmount * 90)/100}`)
        }
        if (isThisTheFirstPurchase === false && cashPayment === false && purchaseAmount > 1000 ) {
            console.log(`Olá ${clientName}, obrigada pela compra! Você ganhou 10% de desconto e sua compra, que inicialmente teve o valor de ${purchaseAmount}, vai sair por ${(purchaseAmount * 90)/100}`)
        }
        if (isThisTheFirstPurchase ===false && cashPayment === false && purchaseAmount < 1000 && purchaseAmount > 500) {
            console.log(`Olá ${clientName}, obrigada pela compra! Você ganhou 5% de desconto e sua compra, que inicialmente teve o valor de ${purchaseAmount}, vai sair por ${(purchaseAmount * 95)/100}`)
        }
        if (isThisTheFirstPurchase === false && cashPayment === false && purchaseAmount < 500) {
            console.log(`Olá ${clientName}, obrigada pela compra! O valor é de ${purchaseAmount}. Você ganhou um cupom de desconto de ${(Math.floor(Math.random() * (20 - 10 + 1) + 10))}%, válido para sua próxima compra conosco.`)
        }  

    }

    discount(`Tiago`,60,false,false)