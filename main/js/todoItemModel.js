export class TodoItemModel {
    constructor(description, date) {
        this.description = description;
        this.date = date;
        this.id = Math.floor(Math.random() * 1000);
    }
}