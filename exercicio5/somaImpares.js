//- No módulo `somaImpares.js`, exporte uma função chamada `somaImpares`, que recebe um array de números como parâmetro e retorna a soma de todos os números ímpares.
//- No módulo principal, importe as duas funções e solicite ao usuário que insira um array de números.

function calculaMedia(array) {
    const soma = array.reduce((acumulador, valor) => acumulador + valor, 0);
    const media = soma / array.length;
    return media;
  }
  
  module.exports = calculaMedia;