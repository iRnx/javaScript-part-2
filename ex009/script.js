const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Rnx', 'leo']

listaDeChamada.splice(1, 2, 'Leon') //Terceiro parametro opcional, para remover do indice 1 ate o indice 2 e adicionar o leon

listaDeChamada.splice(4, 0, 'Chris')
console.log(`Lista de chamada: ${listaDeChamada}`) // Para adicionar o chris atras do indice 4(rnx) e n apagar nd.