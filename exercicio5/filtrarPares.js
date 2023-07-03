//- No módulo `filtrarPares.js`, exporte uma função chamada `filtrarPares`, que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares.

// importando os numeros digitados

import ( digitados) from ('./script.js');

//criando uma bollean para identificar pares

var ePar = digitados => digitados %2 === 0;

//função a ser exportada:

var filtroPares = digitados.filter(ePar);

console.log(filtroPares);

module.exports = filtroPares;