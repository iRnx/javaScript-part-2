// Para transformar o resultado da soma em real
const num1 = 5.1
const num2 = 6.3
const resp = num1 + num2
const resp2 = resp.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
console.log(resp2)


// Para colocar duas casas decimais no resultado
var num1 = 5.1
var num2 = 6.3
var resp = num1 + num2
var resp2 = resp.toFixed(2)
console.log(resp2)
