
// Importa o módulo 'readline' para ler entrada do usuário no terminal
const readline = require('readline');

// Cria uma interface de leitura usando o 'readline'
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Importa a função que realiza o sama dos multiplos de 3 e 5 menores do que o valor inserido 
var funcSomador = require('./somador');

// Função para solicitar um valor ao usuário
function solicitarValor() {
    readLine.question("Digite um valor: ", (valor) => {
        if (!isNaN(valor)) {
            console.log("A soma dos múltiplos de 3 e 5 menor que", valor, "foi:", funcSomador(valor));
            readLine.close();
        } else {
            console.log("São aceitos apenas números");
            solicitarValor();
        }
    });
}
solicitarValor();
