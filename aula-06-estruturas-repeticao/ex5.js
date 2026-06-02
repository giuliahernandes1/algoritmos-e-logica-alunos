const prompt =require('prompt-sync')()

let somaNotas = 0; 
let quantidadeAlunos = 0;

// Pede a prmeira nota antes de entrar em loop
let nota = parseFloat(prompt("Digite a nota do aluno (ou -1 para sair): "));

// Enquanto a nota for diferente de -1 o programa continua
while (nota !== -1) {
    somaNotas += nota; // Acumula a nota na variável soma
    quantidadeAlunos++; // Conta mais um aluno

    // Pede a próxima nota (se for digitado '-1' o loop fecha na próxima volta)
    nota =parseFloat(prompt("Digite a próxima nota (ou -1 para sair): "));
}

// Depois que sair o loop calculamos a média (se ao menos um aluno foi registrado)
if (quantidadeAlunos > 0) {
    let media = somaNotas / quantidadeAlunos;
    console.log ("\n--- Resultado Final---");
    console.log ("Quantidade de alunos: " + quantidadeAlunos);
    console.log ("Média da turma: " + media.toFixed(2));
} else {
    console.log("Nenhuma nota foi digitada.");
}
