//FAÇA UMA CLASSE CHAMADA PESSOA QUE CONTÉM MÉTODOS E ATRIBUTOS SEUS
// !INFORMAÇÕES E AÇÕES SUAS E DO SEU DIA A DIA

function criaPessoa (nome, idade, profissao, formacao, filhos, competencias){
  let pessoa = Object.create({});
    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.profissao = profissao;
    pessoa.formacao = formacao;
    pessoa.filhos = filhos;
    pessoa.competencias = [];
}

let pessoa = criaPessoa ( 'Andre Silveira', 32, 'Bancário', 'Ciências Econômicas', true, ['COBOL', 'Resolução de problemas', 'Análise de dados']);
  
  let adicional ={
    EstudanteDevinhouse: true,
    EstudanteFrontEnd: true,
    EstudanteBackend: true,
  }
  
  Object.assign(pessoa, adicional);

  console.log(pessoa);
