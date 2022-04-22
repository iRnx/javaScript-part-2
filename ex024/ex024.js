const cliente = {
    nome: "Renan",
    idade: 23,
    cpf: "32244896398",
    email: "ggdomangue@gmail.com"
}

// forma de acessar um objeto com notação de colchete
const chaves = ['nome', 'idade', 'cpf', 'email']
console.log(cliente[chaves[2]])
console.log(cliente['email'])

// Fazendo um forEach com Arrow Function para percorrer todo objeto
chaves.forEach(info => console.log(cliente[info]))



