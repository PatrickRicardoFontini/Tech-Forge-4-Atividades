//1. Separação de Responsabilidades em Classe de Pedido
//Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.
//Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
//Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
//Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.


class Order {
    items: { name: string, price: number }[];
    totalPrice: number;
    paymentStatus: string;
    shippingStatus: string;

    constructor() {
        this.items = [];
        this.totalPrice = 0;
        this.paymentStatus = "Pendente";
        this.shippingStatus = "Não enviado";
    }

    addItem(item: { name: string, price: number }): void {
        this.items.push(item);
        this.calculateTotalPrice();
    }

    calculateTotalPrice(): void {
        this.totalPrice = this.items.reduce((total, item) => total + item.price, 0);
    }

    processPayment(): void {
        if (this.totalPrice > 0) {
            this.paymentStatus = "Pago";
        }
    }

    updateShippingStatus(status: string): void {
        this.shippingStatus = status;
    }

    getOrderSummary(): void {
        console.log(`Total: R$ ${this.totalPrice.toFixed(2)}, Pagamento: ${this.paymentStatus}, Envio: ${this.shippingStatus}`);
    }
}

const meuPedido = new Order();
meuPedido.addItem({ name: "Notebook", price: 3500 });
meuPedido.addItem({ name: "Mouse", price: 100 });
meuPedido.processPayment();
meuPedido.updateShippingStatus("Enviado");
meuPedido.getOrderSummary();


class Cart {
    items: { name: string, price: number }[];

    constructor() {
        this.items = [];
    }

    addItem(item: { name: string, price: number }): void {
        this.items.push(item);
    }

    calculateTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}


class Payment {
    status: string;

    constructor() {
        this.status = "Pendente";
    }

    processPayment(totalPrice: number): void {
        if (totalPrice > 0) {
            this.status = "Pago";
        }
    }
}


class Shipping {
    status: string;

    constructor() {
        this.status = "Não enviado";
    }

    updateStatus(status: string): void {
        this.status = status;
    }
}


//2. Gerenciamento de Usuários e Notificações
//Implemente uma classe UserManager que gerencie a criação de usuários e envie notificações por email.
//Inicialmente, coloque toda a lógica de criação e notificação na classe UserManager.
//Em seguida, refatore para dividir a responsabilidade de envio de notificação em uma classe EmailNotification.
//Objetivo: Aumentar a coesão separando a lógica de notificação e reduzir o acoplamento ao injetar EmailNotification na UserManager.


class UserManager {
    users: { name: string, email: string }[];

    constructor() {
        this.users = [];
    }

    addUser(name: string, email: string): void {
        const newUser = { name, email };
        this.users.push(newUser);
        this.sendNotification(newUser);
    }

    sendNotification(user: { name: string, email: string }): void {
        console.log(`Enviando email para ${user.email}: "Bem-vindo, ${user.name}!"`);
    }

    listUsers(): void {
        this.users.forEach(user => {
            console.log(`Nome: ${user.name}, Email: ${user.email}`);
        });
    }
}

const userManager = new UserManager();
userManager.addUser("Alice", "alice@example.com");
userManager.addUser("Bob", "bob@example.com");
userManager.listUsers();


class EmailNotification {
    send(email: string, message: string): void {
        console.log(`Enviando email para ${email}: "${message}"`);
    }
}


//3. Sistema de Envio de Emails e Validação de Contato
//Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.
//Implemente a validação e o envio de email na mesma classe.
//Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
//Objetivo: Melhorar a coesão separando a lógica de validação e reduzir o acoplamento.


class EmailSender {
    sendEmail(contact: { name: string, email: string }): void {
        if (this.validateContact(contact)) {
            console.log(`Enviando email para ${contact.email}: "Olá, ${contact.name}!"`);
        } else {
            console.log("Informações de contato inválidas.");
        }
    }

    validateContact(contact: { name: string, email: string }): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(contact.email) && contact.name.trim() !== "";
    }
}

const emailSender = new EmailSender();
emailSender.sendEmail({ name: "Alice", email: "alice@example.com" });
emailSender.sendEmail({ name: "", email: "bob@example.com" });

class ContactValidator {
    validate(contact: { name: string, email: string }): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(contact.email) && contact.name.trim() !== "";
    }
}





