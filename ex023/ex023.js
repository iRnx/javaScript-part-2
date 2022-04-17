const cliente = {
    nome: "Renan",
    idade: 23,
    cpf: "32244896398",
    email: "ggdomangue@gmail.com"
}

// Forma de acessar um objeto com notação de ponto
console.log(`Meu nome é ${cliente.nome}, minha idade é ${cliente.idade}, meu cpf é ${cliente.cpf} e meu email é ${cliente.email}`)

// Para pegar os 3 primeiros digitos de uma string
console.log(cliente.cpf.substring(0, 3))


