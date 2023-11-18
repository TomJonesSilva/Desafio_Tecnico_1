// recebe um valor inteiro e faz a soma de todos os multimos 
//de 3 e 5 menos que o valor recebido
//caso o valor recebido não for um inteiro, faz-se a conversão
function somador(valor) {
    valor = parseInt(valor);
    var auxiliar = 2;
    var soma = 0;


    for (let i = 0; i < valor; i++) {
        auxiliar += 1;
        if (auxiliar < valor && (auxiliar % 3 == 0 || auxiliar % 5 == 0)) {
            soma += auxiliar;
        }
    }
    return soma;
}
module.exports = somador;