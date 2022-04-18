export default class Model {
    constructor() {
        this.isAuthorized = false;
    }

    signUp(user) {
        // check if all fields are not empty
        if (Object.values(user).some(item => !item)) {
            this.isAuthorized = false;
            return;
        }

        const info = JSON.stringify(user);
        localStorage.setItem('toDoUser', info);
        this.isAuthorized = true;
    }
}