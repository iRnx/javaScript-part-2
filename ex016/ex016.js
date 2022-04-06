const notas = [1, 2, 3, 4, 5]
let soma = 0

// callback
notas.forEach(nota => {
    soma += nota
})

// Segunda forma de fazer um forEach

notas.forEach(function(nota){
    soma += nota
})

let media = soma / notas.length

console.log(media)
