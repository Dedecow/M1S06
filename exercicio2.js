//- Crie um array com uma lista de objetos, cada um representando um aluno. Cada aluno deve possuir as propriedades `nome` (string), `nota1` (number) e `nota2` (number).
//- Utilize uma função de array, como `map`, `filter` ou `reduce`, para calcular a média das notas de cada aluno.
//- Crie um novo array contendo objetos com as propriedades `nome` e `media`, onde `media` é a média das notas.
//- Exiba o array resultante no console, ordenado em ordem decrescente de média.

function criaAluno (nome, nota1, nota2){
    let aluno = Object.create({});
      aluno.nome = nome;
      aluno.number1 = number1;
      aluno.number2 = number2;

      return aluno;
  }
  
  // Criando alguns alunos
let aluno1 = criaAluno('Nila', 9, 10);
let aluno2 = criaAluno('Jaira', 7, 9);
let aluno3 = criaAluno('André', 6, 5);

// Exibindo os dados dos alunos
console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
  
let listaAlunos = [ aluno1, aluno2, aluno3];