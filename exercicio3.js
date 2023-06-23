//- Crie uma classe chamada `Livro` com as propriedades `titulo` (string), `autor` (string) e `anoPublicacao` (number).
//- Implemente um método na classe chamado `obterInformacoes`, que retorna uma string formatada com as informações do livro.
//- Crie três objetos da classe `Livro`, cada um representando um livro diferente.
//- Exiba no console as informações de cada livro, utilizando o método `obterInformacoes`.

function criaLivro (titulo, autor, anoPublicacao){
    let livro = Object.create({});
      livro.titulo = titulo;
      livro.autor = autor;
      livro.anoPublicacao = anoPublicacao;
      const obterInformacoes = (livro) => {
        return "O livro " + livro.titulo + "foi escrito pelo autor " + livro.autor + "no ano de " + livro.anoPublicacao;
      };
      
      return livro;
  }
  
  // Criando livros para array
let livro1 = criaLivro('O Guia do Mochileiro das Galáxias', 'Douglas Adams', 1979);
let livro2 = criaLivro('O Senhor dos Anéis: A Sociedade do Anel', 'J.R.R. Tolkien', 1954);
let livro3 = criaLivro('Harry Potter e a Pedra Filosofal', ' J.K. Rowling', 1997);


