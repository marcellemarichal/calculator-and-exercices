const list = [
    {name: 'Rodolfo', vip: true},
    {name: 'Maria', vip: false},
    {name: 'João', vip: true},
    {name: 'Bruno', vip: true},
    {name: 'Carla', vip: false},
    {name: 'Ana', vip: true},
    {name: 'Julio', vip: false},
    
];

const onlyVips = list.filter( clients => {
   return clients.vip
    }
)

console.log (onlyVips)