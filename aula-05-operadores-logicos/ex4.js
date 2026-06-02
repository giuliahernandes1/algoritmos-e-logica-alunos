// Chamar módulo para uso
const prompt = require('prompt-sync')()

// Coletar as informações e criar variáveis
let idade = parseFloat(prompt('Informe sua idade: '))
let phyton = (prompt('Tem conhecimento do Phyton? (s/n): '))
let javaScript = (prompt('Tem conhecimento do JavaScript? (s/n): '))

// Lógica pra decidir se o currículo está aceito ou não
if (idade >= 18 && (phyton === 's' || javaScript === 's' )) {
    console.log('Currículo aceito!')
} else {
    console.log('Currículo recusado.')
}