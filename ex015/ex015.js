var notas = [1, 2, 3, 4, 5]
let soma = 0
for(c in notas){
    soma += notas[c]
}

let media = soma / notas.length

console.log(`A soma das notas é: ${soma}, e a Média é: ${media}`)