const prompt =require('prompt-sync')()

// Solicita o número da tabuada para o usuário e converte pra inteiro
let numeroInformado = parseInt(prompt("Digite um número para ver a tabuada: "));

console.log ("\n Tabuada do " + numeroInformado + " ---");

// Estrutura "Para...Faça" (Começa no 1, vai até o 10, subindo de 1 em 1)
for (let i = 1; i <= 10; i++) {

    // Calcula a multiplicação
    let resultado = numeroInformado * i;

    // Exibe na tela com o texto arrumadinho
    console.log(numeroInformado + " x " + i + " = " + resultado);
}