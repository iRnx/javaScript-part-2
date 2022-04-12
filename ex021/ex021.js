const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) =>
    atual + acumulador,0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)


// Uma Jeito menor para entender bem o reduce
const notas = [10, 8, 4, 5]

const media = notas.reduce((acumulador, atual) => atual + acumulador, 0) / notas.length

console.log(media)