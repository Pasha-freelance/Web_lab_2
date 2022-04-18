import BaseView from "../../baseUtil.js";

export default class View extends BaseView {
    constructor(model) {
        super();
        this.model = model;
        this.form = null;
        this.todoDecriptionInput = null;
        this.todoDateInput = null;
        this.todosContainer = null;
        this.addTodoController = null;
        this.removeTodoController = null;
        this.initView();
    }

    initView() {
        this.initElements();
        this.initListeners();
        this.renderTodos();
    }

    initElements() {
        this.form = this.query('form');
        this.todoDecriptionInput = this.query('#todo-text-input');
        this.todoDateInput = this.query('#date_to');
        this.todosContainer = this.query('#todos-container')
    }

    initListeners() {
        this.setEvent(this.form, 'submit', (e) => e.preventDefault());
    }

    initControllers(controller) {
        this.addTodoController = controller.add;
        this.removeTodoController = controller.remove;
    }

    onAdd() {
        this.addTodoController({
            description: this.todoDecriptionInput.value,
            date: this.todoDateInput.value,
        });

        this.todoDecriptionInput.value = '';
        this.todoDateInput.value = '';

        this.renderTodos();
    }

    onRemove(id) {
        this.removeTodoController(+id);
        this.renderTodos();
    }

    renderTodos() {
        this.todosContainer.innerHTML = '';
        this.model.todos.forEach(todo => {
            this.todosContainer.insertAdjacentHTML('beforeend', this.getTodoItemHtml(todo.description, todo.date, todo.id));
        });

        this.queryAll('.remove-todo-btn').forEach(btn => {
            btn.addEventListener('click', () => this.onRemove(btn.getAttribute('data-todo-id')));
        });
    }

    getTodoItemHtml(description, date, id) {
        return `
             <div class="todo-item text-white">
                <h5 class="text-center text-white">${date}</h5>
                <p>${description}</p>
                <div class="actions">
                    <button type="button" 
                            data-todo-id="${id}"
                            class="btn-close btn-close-white remove-todo-btn" 
                            aria-label="Close"></button>
                </div>
             </div>
        `
    }
}