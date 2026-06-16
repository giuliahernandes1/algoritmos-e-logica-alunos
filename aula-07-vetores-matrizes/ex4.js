const prompt = require('prompt-sync')()

// Criando o vetor para guardar os gols de 5 times
let gols = []

// Inicializando os contadores zerados
let maisDeTres = 0
let tresOuMenos = 0

// Entrada de dados
for (let i = 0; i < 5; i++) {
    gols[i] = parseInt(prompt(`Digite os gols marcados pelo ${i + 1}° time: `))
}

// Aplicando a condição if/else
    for (let i = 0; i < 5; i++) {
        if (gols[i] > 3) {
            maisDeTres++ // Mesma coisa que: maisDeTres = maisDeTres + 1
        } else {
            tresOuMenos++ // Mesma coisa que: tresOuMenos = tresOuMenos + 1
        }
    }

// Exibindo os resultados
console.log('____________________________________')
console.log(`Times com mais de três gols: ${maisDeTres}`)
console.log(`Times com 3 gols ou menos: ${tresOuMenos}`)