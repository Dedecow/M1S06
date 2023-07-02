//- No módulo `filtrarPares.js`, exporte uma função chamada `filtrarPares`, que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares.


function calculaMedia(array) {
    const soma = array.reduce((acumulador, valor) => acumulador + valor, 0);
    const media = soma / array.length;
    return media;
  }
  
  module.exports = calculaMedia;