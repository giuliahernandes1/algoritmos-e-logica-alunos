// Instalar biblioteca
// npm install prompt-sync

// Chamando a biblioteca para uso
const prompt = require('prompt-sync')()

// Criando o vetor para guardar o nome 
let filmes = []

// Coletando o nome dos filmes
for (let i = 0; i < 5; i++){
    filmes[i] = prompt(`Digite o nome do ${i + 1}° filme: `)
}

//Exibindo os resultados 
console.log('_______________________________')
console.log("") // Pula 1 linha 
console.log("Nome dos 5 filmes digitados")
console.log("") // Pula 1 linha

for (let i = 0; i < 5; i++) {
    console.log(`O nome do ${i + 1}° filme digitado foi: ${filmes[i]}`)
}