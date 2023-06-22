function somaEstoqueInicial(array) {
    return array.reduce((acumulador, valorProduto) => acumulador + valorProduto);
  }
  
  module.exports = somaEstoqueInicial;
  