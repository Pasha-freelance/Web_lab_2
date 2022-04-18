import BaseController from "../../baseUtil.js";

export default class Controller extends BaseController {
    constructor(view, model) {
        super();
        this.view = view;
        this.model = model;
        this.saveTodoBtn = null;
        this.redirectLink = null;
        this.view.initControllers({
            add: this.onAdd,
            remove: this.onRemove,
        });
        this.init();
    }

    init() {
        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.saveTodoBtn = this.query('#save-todo-btn');
        this.redirectLink = this.query('#redirectLink');
    }

    initListeners() {
        this.setEvent(this.saveTodoBtn, 'click', () => this.view.onAdd());
    }

    onAdd(todo) {
        this.model.addTodo(todo);
    }

    onRemove(id) {
        this.model.removeTodo(id);
    }
}