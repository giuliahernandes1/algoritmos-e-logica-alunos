// Chamar módulo para uso
const prompt = require('prompt-sync')()

// Coletar as informações e criar variáveis
let idade = parseFloat(prompt('Informe sua idade: '))

// Lógica pra decidir se a entrada é gratuita ou não
if (idade >= 65 || idade <5) {
    console.log('Entrada gratuita!!')
} else {
    console.log('O visitante deve pagar o ingresso.')
}