class Todo {
    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
    }

    delete(indexoftodo) {
        if (indexoftodo >= 0 && indexoftodo < this.todos.length) {
            this.todos.splice(indexoftodo, 1);
        }
    }

    update(index, updatetodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updatetodo;
        }
    }

    getAll() {
        return this.todos;
    }
    get(indexoftodo) {
        if (indexoftodo >= 0 && indexoftodo < this.todos.length) {
            return this.todos[indexoftodo];
        }
        return null;
    }

    clear() {
        this.todos = [];
    }
}

module.exports = Todo;
