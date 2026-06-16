const prompt = require('prompt-sync')()

// Criando o vetor para guardar 6 preços
let precos = []

// Entrada de dados
for (let i = 0; i < 6; i++) {
    // ParseFloat para garantir que o JavaScript entenda como número decimal
    precos[i] = parseFloat(prompt(`Digite o preço do ${i + 1}° produto: `))
}

// Iniciando as variáveis com o primeiro elemento do vetor
let maior = precos[0]
let menor = precos[0]

// Encontrando o maior e o menor valor
for (let i = 0; i < 6; i++) {
    if (precos[i] > maior) {
        maior = precos[i] // Atualiza o maior
    }

    if (precos[i] < menor) {
        menor = precos[i] // Atualiza o menor
    }
}

// Exibindo resultados
console.log('____________________________________')
console.log(`O maior preço encontrado foi: R$ ${maior.toFixed(2)}`)
console.log(`O menor preço encontrado foi: R$ ${menor.toFixed(2)}`)