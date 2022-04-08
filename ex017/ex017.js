const nomes = ['Pain', 'Itachi', 'Kisame', 'Konan']

// Essa forma a gnt cria uma arrow function e coloca ela dentro do forEach
const teste = nome => {
    console.log(nome)
}
nomes.forEach(teste)
console.log('----------------------------------------')

// Essa forma a gnt cria uma função normal e coloca ela dentro do forEach
nomes.forEach(imprime)

function imprime(nome){
    console.log(nome)
}
console.log('----------------------------------------')

// Essa forma a gnt ja cria uma (arrow function) no proprio forEach
nomes.forEach(nome => {
    console.log(nome)
})
console.log('----------------------------------------')

// Essa forma a gnt cria uma (Função Normal sem nome apenas com parametro) dentro do forEach
nomes.forEach(function(nome){
    console.log(nome)
})