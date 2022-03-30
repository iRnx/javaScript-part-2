const nomes = ['1renan', '2Gustavo', '2Alves', '2Blade', '1Charlie', '2Harper', '1Dean', '1Sam', '1Jake', '2Alan', '1Damon', '2Clark', '1Lex', '1flash']

nomes.sort()
let sala1 = []
let sala2 = []

for(pos in nomes){
    
    if(nomes[pos][0] == 1)
        sala1.push(nomes[pos])
    

    else if(nomes[pos][0] == 2)
        sala2.push(nomes[pos])

    
    
}

console.log(`Esses são os alunos da sala 1: ${sala1}`)
console.log(`Esses são os alunos da sala 2: ${sala2}`)




