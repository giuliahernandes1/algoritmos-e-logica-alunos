// Chamando a biblioteca para uso
const prompt = require('prompt-sync')()

// Criando o vetor para guardar o nome 
let nomes = []
let precos = []

// Entrada de Dados
console.log('=== Cadastro de Pratos ===')
for (let i = 0; i < 4; i++) {
    nomes[i] = prompt(`Digite o nome do ${i + 1}° prato: `)
    precos[i] = parseFloat(prompt(`Digite o preço do ${i + 1}° prato: `))
    console.log('----------------------------------')
}

// Exibindo o cardápio completo numerado
console.log("\n--- Cardápio ---") 
for (let i = 0; i < 4; i++) {
    console.log(`${i + 1}. ${nomes[i]} - R$ ${precos[i].toFixed(2)}`)
}
console.log("----------------")
   
// Solicitando a escolha do usuário
let escolhaUsuario = parseInt(prompt("Escolha um prato pelo número (1 a 4): "))

// Convertendo a escolha (1 a 4) para o índice real do vetor (0 a 3)
let indiceReal = escolhaUsuario - 1

// Validando se a opção está entre 1 e 4 conforme pedido no enunciado
if (escolhaUsuario >= 1 && escolhaUsuario <= 4) {
    // Se for uma opção válida, o programa exibe o resultdo normalmente
    console.log("\nPrato selecionado:") 
    console.log(`${nomes[indiceReal]} - R$ ${precos[indiceReal].toFixed(2)}`)
} else {
    // Se o usuário digitar 0, 5, 10... o programa entra no senão e avisa o erro
    console.log("\nOpção inválida! Porfavor, escolha um número de 1 a 4.")
}
