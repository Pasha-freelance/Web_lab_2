import BaseController from "../../../baseUtil.js";

export default class Controller extends BaseController {
    constructor(view, model) {
        super();
        this.view = view;
        this.model = model;
        this.logInBtn = null;
        this.redirectLink = null;
        this.view.initControllers(this.logIn);
        this.initElements();
    }

    initElements() {
        this.logInBtn = this.query('#sign_in_btn');
        this.redirectLink = this.query('#redirectLink');

        this.setEvent(this.logInBtn, 'click', () => {
            this.view.logIn();
        });
    }

    logIn(credentials) {
        this.model.logIn(credentials);
    }
}