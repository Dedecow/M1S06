//a função é apenas um exemplo simples de calculo do estoque com base no valor dos produtos, em um contexto real de cálculo de estoque, geralmente é necessário considerar informações adicionais, como a quantidade de cada produto em estoque.

function multiplica (array) {
    return array.reduce((acumulador, valorProduto) => acumulador * valorProduto, 1);
  }
  
  module.exports = multiplica;