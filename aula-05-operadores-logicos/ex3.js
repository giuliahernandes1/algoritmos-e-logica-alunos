// Chamar módulo para uso
const prompt = require('prompt-sync')()

// Coletar as informações e criar variáveis
let esgotado = (prompt('O produto está esgotado? (s/n): '))

// Lógica pra decidir se está esgotado ou não
if (esgotado === 'n') {
    console.log('Produto disponível pra venda!!')
} else if (esgotado === 's') {
    console.log('Reabasteça o estoque.')
}
