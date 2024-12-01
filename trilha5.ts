//1. Sistema de Tarefas e Projetos
//Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].
//Crie duas subclasses: Project e DailyTasks.
//Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
//DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
//Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.



abstract class TaskManager {
    protected tasks: Set<string>;

    constructor() {
        this.tasks = new Set();
    }

    abstract addTask(task: string): void;

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class Project extends TaskManager {
    constructor() {
        super();
    }

    addTask(task: string): void {
        if (!this.tasks.has(task)) {
            this.tasks.add(`Projeto: ${task}`);
        }
    }
}

class DailyTasks extends TaskManager {
    constructor() {
        super();
    }

    addTask(task: string): void {
        if (!this.tasks.has(task)) {
            this.tasks.add(`Diária: ${task}`);
        }
    }
}

const meuProjeto = new Project();
meuProjeto.addTask("Desenvolver a interface de usuário");
meuProjeto.addTask("Configurar o banco de dados");

const minhasTarefasDiarias = new DailyTasks();
minhasTarefasDiarias.addTask("Reunião diária às 9h");
minhasTarefasDiarias.addTask("Revisar e-mails");

console.log("Tarefas do projeto:");
console.log(meuProjeto.listTasks());

console.log("\nTarefas diárias:");
console.log(minhasTarefasDiarias.listTasks());



//2. Inventário de Itens
//Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript
//Crie duas subclasses WarehouseInventory e StoreInventory.
//WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
//StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
//Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.



abstract class Inventory {
    protected items: Record<string, number>;

    constructor() {
        this.items = {};
    }

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;

    getInventory(): Record<string, number> {
        return this.items;
    }
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            this.items[item] += quantity;
        } else {
            this.items[item] = quantity;
        }
    }

    removeItem(item: string): void {
        delete this.items[item];
    }
}

class StoreInventory extends Inventory {
    private static MAX_QUANTITY = 10;

    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            this.items[item] = Math.min(this.items[item] + quantity, StoreInventory.MAX_QUANTITY);
        } else {
            this.items[item] = Math.min(quantity, StoreInventory.MAX_QUANTITY);
        }
    }

    removeItem(item: string): void {
        delete this.items[item];
    }
}

const warehouse = new WarehouseInventory();
warehouse.addItem("Teclado", 50);
warehouse.addItem("Mouse", 20);
warehouse.removeItem("Mouse");
console.log("Inventário do armazém:", warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Teclado", 5);
store.addItem("Mouse", 15); 
console.log("Inventário da loja:", store.getInventory());


//3. Gerenciador de Favoritos
//Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos abstratos addFavorite(item: string): void e getFavorites(): string[].
//Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager.
//MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método sort para arrays em JavaScript
//BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista. 



abstract class FavoriteManager {
    protected favorites: string[];

    constructor() {
        this.favorites = [];
    }

    abstract addFavorite(item: string): void;

    getFavorites(): string[] {
        return this.favorites;
    }
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            this.favorites.sort();
        }
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.unshift(item);
        }
    }
}

const moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite("Inception");
moviesManager.addFavorite("The Matrix");
moviesManager.addFavorite("Inception"); 
console.log("Filmes favoritos ordenados:", moviesManager.getFavorites());

const booksManager = new BooksFavoriteManager();
booksManager.addFavorite("1984");
booksManager.addFavorite("Brave New World");
booksManager.addFavorite("Fahrenheit 451");
console.log("Livros favoritos:", booksManager.getFavorites());



//4. Sistema de Votação
//Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object.
//Crie duas subclasses: Election e Poll.
//Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto.
//Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).



abstract class VoteSystem {
    abstract voteFor(candidate: string): void;

    abstract getResults(): object;
}

class Election extends VoteSystem {
    private votes: { [key: string]: number } = {};

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++;
        } else {
            this.votes[candidate] = 1;
        }
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    private votes: { [key: string]: number } = {};

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++;
        } else {
            this.votes[candidate] = 1;
        }
    }

    getResults(): object {
        const sortedCandidates = Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .map(([candidate, votes]) => ({ candidate, votes }));

        return sortedCandidates;
    }
}

const election = new Election();
election.voteFor("Candidato A");
election.voteFor("Candidato B");
election.voteFor("Candidato A");

console.log(election.getResults());

const poll = new Poll();
poll.voteFor("Candidato X");
poll.voteFor("Candidato Y");
poll.voteFor("Candidato X");
poll.voteFor("Candidato Z");

console.log(poll.getResults()); 




