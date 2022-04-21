// acrescentar mais 10% de valor de mercado em cada companhia
// filtrar apenas as empresas mais antigas, ou seja, somente as empresas fundadas antes de 2000
//somar o valor de mercado das empresas restantes

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel EK', foundedOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}
    ];

const add10PercentAtMarketValue = number => {
     number.marketValue = ((number.marketValue * 110)/100)
     return number 
}

const oldestCompanhies = age => age.foundedOn < 2000

const sumCompaniesValues = (acc, current) => acc + current.marketValue



const myBestCompanies = companies.map(add10PercentAtMarketValue).filter(oldestCompanhies).reduce(sumCompaniesValues,0)

console.log(myBestCompanies)





