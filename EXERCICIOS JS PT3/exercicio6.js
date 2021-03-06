/*[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e 
número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; 
- maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. 
- Faça isso usando uma função! */

const people = [ {
    salary: 1500,
    children: 3
},{
    salary: 2000,
    children: 3
},{
    salary: 2800,
    children: 7
},{
    salary: 3000,
    children: 0
},{
    salary: 1000,
    children: 4
},{
    salary: 1850,
    children: 7
},{
    salary: 945,
    children: 8
},{
    salary: 400,
    children: 3
},{
    salary: 5000,
    children: 1
},{
    salary: 2200,
    children: 2
},{
    salary: -250,
    children: 4
},
    
]

function findAverageAndHighestSalary(peopleInformation) {

    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    for (let i = 0; i <= peopleInformation.length; i++) {

    const salary = peopleInformation[i].salary
    const children = peopleInformation[i].children

    if (salary > highestSalary) highestSalary = salary

    if (salary < 0) {
        console.log(`Média de salário: R$${(averageSalary / i).toFixed(0)}`)
        console.log(`Média de filhos: ${(averageChildren / i).toFixed(0)}`)
        console.log(`Maior salário: R$${highestSalary}`)
        break
    } else {
        averageSalary = averageSalary + salary;
        averageChildren += children
    }
    
    }
}

findAverageAndHighestSalary(people)