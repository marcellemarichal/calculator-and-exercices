const randomNumber = Math.floor(Math.random() * (10-1) +1)
const winnerNumber = Math.floor(Math.random() * (10-1) +1)

console.log(randomNumber, "Random Number")
console.log(winnerNumber, "Winner Number")

if (randomNumber===winnerNumber) {
    console.log("Você ganhou.")
}
else {
    console.log("Você perdeu.")
}
