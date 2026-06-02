// Importação do módulo
// npm install prompt-sync

// Chamar módulo para uso
const prompt = require('prompt-sync')()

// Coletar as informações e criar variáveis
let nota = parseFloat(prompt('Qual a sua nota (0 a 10): '))
let frequencia = parseFloat(prompt('Qual a frequencia (0 a 100%): '))

// Lógica pra decidir se está aprovado ou não
if (nota >= 7 && frequencia >= 75) {
    console.log('Aluno aprovado!!')
} else {
    console.log('Aluno reprovado.')
}
