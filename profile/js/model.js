export default class Model {
    constructor() {}

    get userInfo() {
       return JSON.parse(localStorage.getItem('toDoUser')) ?? {};
    }

    get isAuthorized() {
        return Object.values(JSON.parse(localStorage.getItem('toDoUser')) ?? {}).length;
    }
}