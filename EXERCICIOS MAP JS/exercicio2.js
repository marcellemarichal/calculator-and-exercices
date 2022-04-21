const students = [
    {name: 'Rodolfo', testGrade: 7},
    {name: 'Maria', testGrade: 9},
    {name: 'João', testGrade: 8},
    {name: 'Bruno', testGrade: 4},
    {name: 'Carla', testGrade: 3},
    {name: 'Ana', testGrade: 2},
    {name: 'Julio', testGrade: 10},
]

const result = students.map( (grades) => {
    const result = {
        name: grades.name,
        finalResult: grades.testGrade >= 7 ? "Approved" : "Disapproved"
    }
    return result
})

console.log(result)