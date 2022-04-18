import {TodoItemModel} from "./todoItemModel.js";

export default class Model {
    constructor() {
        this.isAuthorized = false;
        this.todos = [];
        this.loadTodos();
    }

    loadTodos() {
        const user = JSON.parse(localStorage.getItem('toDoUser'));
        this.todos = user.todos || [];
    }

    addTodo(todo) {
        const item = new TodoItemModel(todo.description, todo.date);
        const user = JSON.parse(localStorage.getItem('toDoUser'));
        this.todos.push(item);

        localStorage.setItem('toDoUser', JSON.stringify({...user, todos: this.todos}));
    }

    removeTodo(id) {
       const idx = this.todos.findIndex(el => el.id === id);
       const user = JSON.parse(localStorage.getItem('toDoUser'));
       this.todos.splice(idx, 1);

       localStorage.setItem('toDoUser', JSON.stringify({...user, todos: this.todos}));
    }
}