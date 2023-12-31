//- Crie um array com uma lista de objetos, cada um representando um aluno. Cada aluno deve possuir as propriedades `nome` (string), `nota1` (number) e `nota2` (number).
//- Utilize uma função de array, como `map`, `filter` ou `reduce`, para calcular a média das notas de cada aluno.
//- Crie um novo array contendo objetos com as propriedades `nome` e `media`, onde `media` é a média das notas.
//- Exiba o array resultante no console, ordenado em ordem decrescente de média.

let criaAluno = (nome, nota1, nota2) => {
  nota1 = parseInt(nota1);
  nota2 = parseInt(nota2);
  let aluno = new Aluno{};
  aluno.nome = nome;
  aluno.nota1 = nota1;
  aluno.nota2 = nota2;

  return aluno;
}
  
let aluno1 = criaAluno('Nila', 9, 10);
let aluno2 = criaAluno('Jaira', 7, 9);
let aluno3 = criaAluno('André', 6, 5);

let listaAlunos = [ aluno1, aluno2, aluno3];

function calcularMedia(alunosMedia, aluno) {
  let media = (aluno.nota1 + aluno.nota2) / 2;
  alunosMedia.push({ nome: aluno.nome, media: media });
  return alunosMedia;
}

let media = listaAlunos.reduce(calcularMedia, []);

console.log (alunosMedia);