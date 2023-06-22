//FAÇA UMA CLASSE CHAMADA PESSOA QUE CONTÉM MÉTODOS E ATRIBUTOS SEUS
// !INFORMAÇÕES E AÇÕES SUAS E DO SEU DIA A DIA

class Pessoa {
    nome;
    idade;
    profissao;
    formacao;
    filhos;
    competencias;
}

let pessoa = {
    nome: 'Andre Silveira',
    idade: 32,
    profissao: 'Bancário',
    formacao: 'Ciências Econômicas',
    filhos: true,
    competencias: ['COBOL', 'Resolução de problemas', 'Análise de dados']
  };
  
  let adicional ={
    EstudanteDevinhouse: true,
    EstudanteFrontEnd: true,
    EstudanteBackend: true,
  }
  
  Object.assign(pessoa, adicional);

  console.log(pessoa);
