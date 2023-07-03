//- No módulo `filtrarPares.js`, exporte uma função chamada `filtrarPares`, que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares.

// importando os numeros digitados

let require ( digitados) = require ('./script.js');

//criando uma bollean para identificar pares

let ePar = (digitados) => digitados %2 === 0;

//função a ser exportada:

let filtroPares = digitados.filter(ePar);

console.log(filtroPares);

module.exports = filtroPares;