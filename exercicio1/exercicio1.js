//- Crie três módulos separados em arquivos distintos: `somaArray.js`, `multiplicaArray.js` e `calculaMedia.js`.
//- No módulo `somaArray.js`, exporte uma função chamada `somaArray`, que recebe um array de números como parâmetro e retorna a soma de todos os elementos.
//- No módulo `multiplicaArray.js`, exporte uma função chamada `multiplicaArray`, que recebe um array de números como parâmetro e retorna a multiplicação de todos os elementos.
//- No módulo `calculaMedia.js`, exporte uma função chamada `calculaMedia`, que recebe um array de números como parâmetro e retorna a média aritmética desses números.
//- No módulo principal, importe as três funções e solicite ao usuário que insira um array de números.
//- Utilize as funções importadas para calcular e exibir no console a soma, a multiplicação e a média dos elementos do array fornecido pelo usuário.


const calculaMedia = require('./calculaMedia');

const somaEstoqueInicial = require('./somaEstoqueInicial.js');
const estoqueInicial = [10, 5, 8, 12, 6];
const estoque = somaEstoqueInicial(estoqueInicial);
console.log(estoque);

const valorTotalEstoque = require('./multiplicaArray');
const produtos = [10, 5, 8, 12, 6];
const valorTotal = valorTotalEstoque(produtos);
console.log('Valor total do estoque:', valorTotal);


