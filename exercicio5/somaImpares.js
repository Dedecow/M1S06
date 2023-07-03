  //- No módulo `somaImpares.js`, exporte uma função chamada `somaImpares`, que recebe um array de números como parâmetro e retorna a soma de todos os números ímpares.
  //- No módulo principal, importe as duas funções e solicite ao usuário que insira um array de números.

  // importando os numeros digitados

  let require ( digitados) = require ('./script.js');

  //criando uma bollean para identificar pares

  let ePar = (digitados) => digitados %2 === 0;

  //função a ser exportada:

  let filtroImpares = digitados.filter(digitado) => !ePar(digitado);

  console.log(filtroImpares);

  let somaFiltroImpares = filtroImpares.reduce((acc, impar) => acc + impar, 0);

  module.exports = somaFiltroImpares;
