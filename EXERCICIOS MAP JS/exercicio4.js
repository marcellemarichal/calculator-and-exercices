const students = [
    {name: 'Rodolfo', testGrade: 7},
    {name: 'Maria', testGrade: 9},
    {name: 'João', testGrade: 8},
    {name: 'Bruno', testGrade: 4},
    {name: 'Carla', testGrade: 3},
    {name: 'Ana', testGrade: 2},
    {name: 'Julio', testGrade: 10},
];

const approvedStudents = students.filter( student => {
    return student.testGrade >= 7
})

console.log(approvedStudents)