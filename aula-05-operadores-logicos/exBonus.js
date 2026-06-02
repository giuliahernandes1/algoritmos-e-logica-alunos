// Chamar módulo para uso
const prompt = require('prompt-sync')()

// Coletar as informações e criar variáveis
let valorCompra = parseFloat(prompt('Digite o valor da compra: '))
let clienteVip = (prompt('É cliente VIP? (s/n): '))
let possuiCupom = (prompt('Possui cupom? (s/n): '))
let parcelasAtrasadas = (prompt('Tem parcelas atrasadas? (s/n): '))

// Lógica pra decidir se o currículo está aceito ou não
if ((clienteVip === 's'&& valorCompra > 500) || (possuiCupom === 's' && parcelasAtrasadas === 'n')){
    console.log('Desconto aplicado!.')
} else {
    console.log('Desconto negado.')
}
