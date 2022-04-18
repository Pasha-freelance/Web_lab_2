import BaseController from "../../../baseUtil.js";

export default class Controller extends BaseController {
    constructor(view, model) {
        super();
        this.view = view;
        this.model = model;
        this.signUpBtn = null;
        this.view.initControllers(this.signUp);
        this.init();
    }

    init() {
        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.signUpBtn = this.query('#sign_up_btn');
    }

    initListeners() {
        this.setEvent(this.signUpBtn, 'click', () => this.view.signUp());
    }

    signUp(credentials) {
        this.model.signUp({...credentials, todos: []});
    }
}