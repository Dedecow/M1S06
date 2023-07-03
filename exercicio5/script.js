//- Crie dois módulos em arquivos distintos: `filtrarPares.js` e `somaImpares.js`.
//- No módulo `filtrarPares.js`, exporte uma função chamada `filtrarPares`, que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares.
//- No módulo `somaImpares.js`, exporte uma função chamada `somaImpares`, que recebe um array de números como parâmetro e retorna a soma de todos os números ímpares.
//- No módulo principal, importe as duas funções e solicite ao usuário que insira um array de números.
//- Utilize a função `filtrarPares` para obter um novo array contendo apenas os números pares do array fornecido pelo usuário.
//- Em seguida, utilize a função `somaImpares` para calcular e exibir no console a soma dos números ímpares do array fornecido pelo usuário.


const readline = require('readline');
let filtroPares = require('./filtrarPares.js');
let somaImpares = require('./somaImpares.js');
let digitados = null;

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question = readline.createInterface(
    {
        'Digite uma lista de números separados por vírgula', input => {
            let digitados = input.split(',').map(Number);
            filtroPares(digitados);
            somaImpares(digitados);
            rl.close();
        }
    }
)

module.exports = {
  digitados: digitados
};

