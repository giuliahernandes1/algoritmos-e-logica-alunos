// Instalar biblioteca
// npm install prompt-sync

// Chamando a biblioteca para uso
const prompt = require('prompt-sync')()

// Criando o vetor para guardar os produtos
let produtos = []

// Coletando o nome dos produtos (Para...Faça)
for (let i = 0; i < 5; i++) {
    produtos[i] = prompt(`Digite o nome do ${i + 1}º produto: `)
}

// Exibindo os resultados
console.log('__________________________________')
console.log("") // Pula 1 linha
console.log("Produtos da sua Lista de Compras:")
console.log("") // Pula 1 linha

// Exibindo os produtos numerados (Para...Faça)
for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}. ${produtos[i]}`)
}