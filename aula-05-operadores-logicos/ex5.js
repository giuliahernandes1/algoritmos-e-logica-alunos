// Chamar módulo para uso
const prompt = require('prompt-sync')()

let salario = parseFloat(prompt('Qual seu salário mensal? (R$): '))
let temFiador = (prompt('Você possui um fiador? (s/n): ')) === "s";
let nomeSujo = (prompt('Seu nome está sujo no Serasa? (s/n): ')) === "s";

// Lógica pra decidir se o empréstimo será aprovado ou não
if (!nomeSujo && (salario > 2000 || possuiFiador)) {
    console.log('Empréstimo aceito!.')
} else {
    console.log('Empréstimo negado.')
}
