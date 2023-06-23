function calculaMedia(array) {
    const soma = array.reduce((acumulador, valor) => acumulador + valor, 0);
    const media = soma / array.length;
    return media;
  }
  
  module.exports = calculaMedia;
  