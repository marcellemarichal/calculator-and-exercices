/* quem for vip vai pra lista black e quem não for vip vai pra lista green*/

const list = [
    {name: 'Rodolfo', vip: true},
    {name: 'Maria', vip: false},
    {name: 'João', vip: true},
    {name: 'Bruno', vip: true},
    {name: 'Carla', vip: false},
    {name: 'Ana', vip: true},
    {name: 'Julio', vip: false},
    
];

const newList = list.map((area) => { // fiz uma constante para a nova lista que vou criar e atribui o valor com os =. depois disso, peguei o nome da const de referencia, que seria a list, e mandei ela mapear. Coloquei o nome area na função para referenciar para onde vão os vips e não vips, abri a arrow function para mostrar que area é uma função e abri os colchetes.
    const newList = { //chamei novamente o número da nova constante e depois abri outro colchete para explicar o que eu quero que ela faça depois de mapear
        name: area.name, // o nome será o mesmo nome da lista antiga, mas como area é minha nova função, chamo por area.name
        vip: area.vip, //a mesma coisa serve para o vip, essas informações não mudam
        sector: area.vip == true ? 'Black' : 'Green' // nesse caso, eu estou adicionando uma informação, então usei o operador ternário, que pergunta "se vip for true," coloco area em 'Black'. Os dois pontos mostram que se não, coloco em 'Green'. Isso é parecido com if else
    }

    return newList //sempre preciso dar return porque senão é uma função VOID, que não define para onde vai retornar, então retorna "undefined"
})

console.log(newList) //rodar a constante nova recém feita