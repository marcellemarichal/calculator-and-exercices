//[ ] Crie 5 objetos nesse formato
//{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada 
// ou não no processo, a pessoa deve ser maior de idade e brasileira para ser aprovada. 

const personOne = {
    name: "Fernanda",
    age: 34,
    gender: "feminino",
    occupation: "professora",
    nacionality: "brasileira"
}

const personTwo = {
    name: "Mateus",
    age: 16,
    gender: "masculino",
    occupation: "estudante",
    nacionality: "brasileira"
}

const personThree = {
    name: "Carlos",
    age: 27,
    gender: "masculino",
    occupation: "barbeiro",
    nacionality: "uruguaia"
}

const personFour = {
    name: "Marcela",
    age: 14,
    gender: "feminino",
    occupation: "estudante",
    nacionality: "argentina"
}

const personFive = {
    name: "Emily",
    age: 21,
    gender: "feminino",
    occupation: "prostituta",
    nacionality: "chilena"
}

if (personTwo.age >=18 && personTwo.nacionality === "brasileira") {
    console.log("Você foi aprovado no processo")
}

else {
    console.log("Você não foi aprovado no processo")
}