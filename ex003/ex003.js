// Declaração de função

function apresentandoArrow(nome){
    return `Meu nome é ${nome}`
}


// Arrow Function

const apresentandoArrow = nome => `Meu nome é ${nome}`

const soma = (n1, n2) => n1 + n2
console.log(soma(5, 5))

// Arrow Function com + de uma linha de instrução

const compararDoisNumeros = (n1, n2) => {
    if(n1 != n2){
        return `${n1} é diferente de ${n2}`
    } else {
        return `Os valores ${n1} e ${n2} não são diferentes`
    }
}

console.log(compararDoisNumeros(5, 6))