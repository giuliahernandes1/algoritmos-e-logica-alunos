const prompt =require('prompt-sync')()
// Solicita o número ao usuário e transforma ele em inteiro
let numeroInformado = parseInt(prompt("Digite um número inteiro positivo: "));

// Variáveis de controle
let soma = 0; 
let i = 1;

// "Enquanto...Faça"
while (i <= numeroInformado) {
    soma = soma + i; // Adiciona o valor de 'i' à soma
    i++             // Soma 1 ao 'i' para ir pro próximo número
}

// Exibe o resultado final
console.log("A soma de todos os números de 1 até " + numeroInformado + " é: " + soma);
console.log("A soma final é: " + soma);