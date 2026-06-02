const prompt =require('prompt-sync')()

let senha;

// Estrutura "DO...WHILE"(Repita...Até que)
do {
    //Esse bloco SEMPRE roda pelo menos na primeira vez
    senha = prompt("Digite a senha de acesso: ");

} while (senha !== "1234"); // Enquanto a senha for diferente de "1234" volte para o 'do'

// Mensagem final
console.log("Acesso permitido!🔓​");
