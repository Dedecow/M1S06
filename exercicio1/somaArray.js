function soma(array) {
    return array.reduce((acumulador, valorProduto) => acumulador + valorProduto);
  }
  
  module.exports = soma;
  