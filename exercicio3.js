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
  obterInformacoes(){
    return 'O livro "' + this.titulo + '" do autor "' + this.autor + '" foi publicado em "' + this.anoPublicacao + '".';
  }
}
  
let livro1 = new Livro('O Alquimista', 'Paulo Coelho', 1988);
let livro2 = new Livro('Grande Sertão: Veredas', 'João Guimarães Rosa', 1956);
let livro3 = new Livro('Memórias Póstumas de Brás Cubas', 'Machado de Assis', 1881);
let livros = [livro1, livro2, livro3];

livros.forEach((livro) => {
  console.log(livro.obterInformacoes());
});


