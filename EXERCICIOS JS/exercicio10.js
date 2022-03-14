//[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
// Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const personOne = {
    name: "Marcelle",
    age: 24, 
    gender: "female",
    height: 1.67,
    birthday: "July 27, 1997"
}

const personTwo = {
    name: "Vladimir Junior",
    age: 24,
    gender: "male",
    height: 1.71,
    birthday: "November 13, 1997"
}

console.log(personOne.name === personTwo.name)