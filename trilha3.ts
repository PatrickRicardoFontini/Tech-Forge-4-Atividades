//Exercício 1: 
//Crie uma classe Veiculo com um método mover() que imprima "O veículo está se movendo". Crie duas subclasses Carro e Bicicleta, ambas herdam de Veiculo. A subclasse Carro deve sobrescrever o método mover() para imprimir "O carro está dirigindo" e Bicicleta deve sobrescrever para "A bicicleta está pedalando". Instancie objetos de ambas as subclasses e chame o método mover().


class Veiculo {
    mover(): void {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    mover(): void {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    mover(): void {
        console.log("A bicicleta está pedalando");
    }
}

const meuCarro = new Carro();
const minhaBicicleta = new Bicicleta();

meuCarro.mover(); 
minhaBicicleta.mover(); 


//Exercício 2:
//Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.



abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Quadrado extends FiguraGeometrica {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach(figura => {
        console.log(`Área: ${figura.calcularArea().toFixed(2)}`);
    });
}

const circulo = new Circulo(5);
const quadrado = new Quadrado(4);
const triangulo = new Triangulo(3, 6);

const figuras: FiguraGeometrica[] = [circulo, quadrado, triangulo];
imprimirAreas(figuras);



//Exercício 3:
//Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.



class Pagamento {
    processar(): void {
        throw new Error("Método processar() deve ser implementado");
    }
}

class PagamentoCartao extends Pagamento {
    numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    validarCartao(): boolean {
        
        return this.numeroCartao.length === 16;
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log("Pagamento com cartão processado com sucesso");
        } else {
            console.log("Número do cartão inválido");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    gerarCodigoBoleto(): string {
     
        return `BOLETO-${Math.random().toString(36).substring(7).toUpperCase()}`;
    }

    processar(): void {
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(`Código do boleto gerado: ${codigoBoleto}`);
    }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach(pagamento => {
        pagamento.processar();
    });
}

const pagamentoCartao = new PagamentoCartao("1234567890123456");
const pagamentoBoleto = new PagamentoBoleto();

const listaPagamentos: Pagamento[] = [pagamentoCartao, pagamentoBoleto];
processarPagamentos(listaPagamentos);



//Exercício 4:
//Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.



class Animal {
    private energia: number;

    constructor() {
        this.energia = 0;
    }

    protected aumentarEnergia(valor: number): void {
        this.energia += valor;
    }

    statusEnergia(): void {
        console.log(`Nível de energia: ${this.energia}`);
    }

    comer(): void {
        this.aumentarEnergia(10);
    }
}

class Leao extends Animal {
    caçar(): void {
        console.log("O leão está caçando...");
        this.aumentarEnergia(-20);
        this.comer();
    }

    comer(): void {
        console.log("O leão está comendo...");
        super.comer();
        this.aumentarEnergia(20);
    }
}

class Passaro extends Animal {
    comer(): void {
        console.log("O pássaro está comendo...");
        this.aumentarEnergia(15);
    }
}

function processarAnimais(animais: Animal[]): void {
    animais.forEach(animal => {
        animal.comer();
        animal.statusEnergia();
    });
}

const leao = new Leao();
const passaro = new Passaro();

leao.caçar();
passaro.comer();

const animais: Animal[] = [leao, passaro];
processarAnimais(animais);



//Exercício 5:
//Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.



abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    getNome(): string {
        return this.nome;
    }

    getSalario(): number {
        return this.salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const salarioComBonus = funcionario.getSalario() + funcionario.calcularBonus();
        console.log(`${funcionario.getNome()} - Salário com bônus: R$ ${salarioComBonus.toFixed(2)}`);
    });
}

const gerente = new Gerente("Alice", 8000);
const operario = new Operario("Bob", 3000);

const funcionarios: Funcionario[] = [gerente, operario];
calcularSalarioComBonus(funcionarios);
