//- Crie três módulos separados em arquivos distintos: `somaArray.js`, `multiplicaArray.js` e `calculaMedia.js`.
//- No módulo `somaArray.js`, exporte uma função chamada `somaArray`, que recebe um array de números como parâmetro e retorna a soma de todos os elementos.
//- No módulo `multiplicaArray.js`, exporte uma função chamada `multiplicaArray`, que recebe um array de números como parâmetro e retorna a multiplicação de todos os elementos.
//- No módulo `calculaMedia.js`, exporte uma função chamada `calculaMedia`, que recebe um array de números como parâmetro e retorna a média aritmética desses números.
//- No módulo principal, importe as três funções e solicite ao usuário que insira um array de números.
//- Utilize as funções importadas para calcular e exibir no console a soma, a multiplicação e a média dos elementos do array fornecido pelo usuário.

const readline = require('readline');
let soma = require('./somaEstoqueInicial.js');
let multiplica = require('./multiplicaArray.js');
let calculaMedia = require('./calculaMedia.js');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira um array de números separados por vírgula: ', (input) => {
  let array = input.split(',').map(Number);
  let soma = somaArray(array);
  let multiplicacao = multiplicaArray(array);
  let media = calculaMedia(array);
  console.log('Soma:', soma);
  console.log('Multiplicação:', multiplicacao);
  console.log('Média:', media);

  rl.close();
});
