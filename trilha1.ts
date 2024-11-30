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