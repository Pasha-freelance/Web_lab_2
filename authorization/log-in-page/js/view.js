import BaseView from "../../../baseUtil.js";

export default class View extends BaseView{
    constructor(model) {
        super();
        this.model = model;
        this.form = null;
        this.email = null;
        this.password = null;
        this.redirectLink = null;
        this.formController = null;
        this.initView();
    }


    initView() {
        this.initElements();
        this.initControllers();
        this.initListeners();
    }

    initElements() {
        this.form =  this.query('form');
        this.email = this.query('#email');
        this.password = this.query('#password');
        this.redirectLink = this.query('#redirectLink');
    }

    initControllers(controller) {
        this.formController = controller;
    }

    initListeners() {
        this.setEvent(this.form, 'submit', (e) => {
            e.preventDefault();
            this.checkAuth();
        });
    }

    logIn() {
        this.formController({
            email: this.email.value,
            password: this.password.value,
        });
    }

    checkAuth() {
        if (this.model.isAuthorized) {
            this.redirectLink.click();
        }
        else {
            alert('Wrong credentials! Try again or sign up');
        }
    }
}