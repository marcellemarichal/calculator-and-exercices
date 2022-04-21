const students = [
    {name: "Lucas", age: 32},
    {name: "Pedro", age: 23},
    {name: "Leticia", age: 12},
    {name: "Marjorie", age: 35},
    {name: "Pietra", age: 50},
    {name: "Marcela", age: 37},
    {name: "Fernanda", age: 45},
    {name: "Natalia", age: 16},
    {name: "Cassiano", age: 12},
    {name: "Sandra", age: 22},
    {name: "Maria", age: 10},
    {name: "Luisa", age: 48},
    {name: "Edson", age: 27},
    {name: "Nataniel", age: 23},
    {name: "Enzo", age: 14},
    {name: "Miguel", age: 38},
    {name: "Amanda", age: 19},
    {name: "Igor", age: 18},
    {name: "Juliana", age: 17},
    {name: "Mara", age: 10},
    {name: "Denis", age: 23},
    {name: "Elena", age: 27},
    {name: "Vitor", age: 28},
    {name: "Vanessa", age: 28},
    {name: "Wesley", age: 48},
    {name: "Catarina", age: 17},
    {name: "Ivan", age: 40},
    {name: "Mariana", age: 44},
    {name: "Daniela", age: 33},
    {name: "Mateus", age: 22},
    {name: "Jonas", age: 11},
    {name: "Luciana", age: 55},
    {name: "Guilherme", age: 51},
    {name: "Cassia", age: 42},
    {name: "Leonardo", age: 37}

];

let allStudentsAge = 0

students.forEach((student) => {
    allStudentsAge = allStudentsAge + student.age 
} )

const averageAge = allStudentsAge/students.length

console.log(`A média da idade dos alunos é de ${averageAge.toFixed(0)} anos.`)