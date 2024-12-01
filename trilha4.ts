//1 - Produtos
//Crie uma interface chamada Produto que tenha as propriedades id (número), nome (string) e preco (número).
//Em seguida, crie uma classe ItemLoja que implemente essa interface.
//No construtor da classe, atribua valores às propriedades id, nome e preco.


interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

const item = new ItemLoja(1, "Notebook", 3500.00);
console.log(`ID: ${item.id}, Nome: ${item.nome}, Preço: R$ ${item.preco.toFixed(2)}`);



//2 - Documentos
//Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string).
//Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".


interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}

const meuTexto = new Texto("Introdução ao TypeScript", "TypeScript e uma linguagem igual JavaScript que adiciona tipos estáticos.");
console.log(meuTexto.exibir());


//3 - Cadastro e Busca de Produtos em uma Loja:
//Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string).
//Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja.
//Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente, caso exista; caso contrário, retorne undefined



interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    produtos: ProdutoLoja[];

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const minhaLoja = new Loja();

minhaLoja.adicionarProduto({ codigo: 1, nome: "Notebook" });
minhaLoja.adicionarProduto({ codigo: 2, nome: "Smartphone" });

const produtoEncontrado = minhaLoja.buscarProdutoPorCodigo(1);
if (produtoEncontrado) {
    console.log(`Produto encontrado: ${produtoEncontrado.nome}`);
} else {
    console.log("Produto não encontrado");
}


//4 - Sistema de Biblioteca com Checagem de Disponibilidade:
//Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean).
//Crie uma classe Biblioteca que contenha um array de livros que implementem Livro.
//Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true. 



interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    livros: Livro[];

    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const minhaBiblioteca = new Biblioteca();

minhaBiblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: true });
minhaBiblioteca.adicionarLivro({ titulo: "Brave New World", autor: "Aldous Huxley", disponivel: false });
minhaBiblioteca.adicionarLivro({ titulo: "Fahrenheit 451", autor: "Ray Bradbury", disponivel: true });

const livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();
livrosDisponiveis.forEach(livro => {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
});



//5 - Gestão de Bibliotecas com Filtro Avançado de Autores e Livros Disponíveis:
//Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean).
//Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca.
//Implemente os seguintes métodos:
//filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.
//buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.
//obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.



interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    livros: LivroBiblioteca[];

    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const minhaBibliotecaGestao = new BibliotecaGestao();

minhaBibliotecaGestao.adicionarLivro({ titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true });
minhaBibliotecaGestao.adicionarLivro({ titulo: "Brave New World", autor: "Aldous Huxley", genero: "Distopia", disponivel: false });
minhaBibliotecaGestao.adicionarLivro({ titulo: "Fahrenheit 451", autor: "Ray Bradbury", genero: "Distopia", disponivel: true });
minhaBibliotecaGestao.adicionarLivro({ titulo: "To Kill a Mockingbird", autor: "Harper Lee", genero: "Drama", disponivel: true });

const distopiaLivros = minhaBibliotecaGestao.filtrarPorGenero("Distopia");
console.log("Livros de Distopia:");
distopiaLivros.forEach(livro => console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`));

const livrosOrwell = minhaBibliotecaGestao.buscarPorAutor("George Orwell");
console.log("\nLivros de George Orwell:");
livrosOrwell.forEach(livro => console.log(`Título: ${livro.titulo}, Gênero: ${livro.genero}`));

const livrosDisponiveisOrdenados = minhaBibliotecaGestao.obterLivrosDisponiveisOrdenados();
console.log("\nLivros disponíveis ordenados por título:");
livrosDisponiveisOrdenados.forEach(livro => console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`));




