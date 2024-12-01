//Exercício 1: 
//Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.


class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldoInicial: number){
        this.saldo = saldoInicial;
        this.titular = titular;
    }

    depositarDinheiro(valor: number): void{
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Voce depositou um valor de R$${valor}. Seu saldo atual e de R$${this.saldo}`)
        } else {
            console.log("O valor a ser depositado tem que ser maior que 0")
        }
    }

    sacarDinheiro(valor: number): void{
        if(valor <= 0){
            console.log("O valor deve ser maior que zero")
            return;
        }
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Você sacou R$${valor}. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }

}

//Exercício 2: 
//Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.


class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false; 
    }

    marcarComoLido() {
        this.lido = true;
    }
}


const meuLivro = new Livro("Diario de um banana", "A arte da guerra", 208);
console.log(meuLivro.lido); 
meuLivro.marcarComoLido();
console.log(meuLivro.lido); 


//Exercício 3: 
//Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).


class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorTotalEstoque(): number {
        return this.preco * this.quantidade;
    }
}

const meuProduto = new Produto("Cafe", 10.5, 30);
console.log(`Valor total em estoque: R$ ${meuProduto.calcularValorTotalEstoque().toFixed(2)}`); // Valor total em estoque: R$ 315.00


//Exercício 4: 
//Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.


class Temperatura {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    converterParaFahrenheit(): number {
        return (this.valor * 9/5) + 32;
    }

    converterParaKelvin(): number {
        return this.valor + 273.15;
    }
}

const minhaTemperatura = new Temperatura(25);
console.log(`Temperatura em Fahrenheit: ${minhaTemperatura.converterParaFahrenheit().toFixed(2)} °F`); 
console.log(`Temperatura em Kelvin: ${minhaTemperatura.converterParaKelvin().toFixed(2)} K`); 


//Exercício 5: 
//Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.


class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): void {
        console.log("Compromissos:");
        this.compromissos.forEach((compromisso, index) => {
            console.log(`${index + 1}. ${compromisso}`);
        });
    }
}

const minhaAgenda = new Agenda();
minhaAgenda.adicionarCompromisso("Reunião com o cliente às 10h");
minhaAgenda.adicionarCompromisso("Almoço com a equipe às 12h");
minhaAgenda.adicionarCompromisso("Apresentação de projeto às 15h");

minhaAgenda.listarCompromissos();







