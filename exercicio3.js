//- Crie uma classe chamada `Livro` com as propriedades `titulo` (string), `autor` (string) e `anoPublicacao` (number).
//- Implemente um método na classe chamado `obterInformacoes`, que retorna uma string formatada com as informações do livro.
//- Crie três objetos da classe `Livro`, cada um representando um livro diferente.
//- Exiba no console as informações de cada livro, utilizando o método `obterInformacoes`.




class Livro {
  constructor (titulo, autor, anoPublicacao){
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = parseInt(anoPublicacao);
  }
  obterInformaçoes(){
    return 'O livro "' + this.titulo + '" do autor "' + this.autor + '" foi publicado em "' + this.anoPublicacao + '".';
  }
}
  
  // Criando livros para array
let livro1 = criaLivro('O Guia do Mochileiro das Galáxias', 'Douglas Adams', 1979);
let livro2 = criaLivro('O Senhor dos Anéis: A Sociedade do Anel', 'J.R.R. Tolkien', 1954);
let livro3 = criaLivro('Harry Potter e a Pedra Filosofal', ' J.K. Rowling', 1997);


