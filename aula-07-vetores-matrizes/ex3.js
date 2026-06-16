const prompt = require('prompt-sync')()

// Criando o vetor para guardar 5 números inteiros
let numeros = []

// Entrada de dados
for (let i = 0; i < 5; i++) {
    // parseInt por conta dos números inteiros
    numeros[i] = parseInt(prompt(`Digite o ${i + 1}° numero: `))
}

console.log('____________________________________')
console.log('Números na ordem inversa')

// Saída com decremento
// Começa em 4; continua enquanto i for maior ou igual a 0; diminui 1 a cada volta (i--)
for (let i = 4; i >= 0; i--) {
    console.log(numeros[i])
}