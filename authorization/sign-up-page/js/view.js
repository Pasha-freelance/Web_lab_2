import BaseView from "../../../baseUtil.js";

export default class View extends BaseView {
    constructor(model) {
        super();
        this.model = model;
        this.form = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.password = null;
        this.sex = null;
        this.birthDate = null;
        this.initView();
    }

    initView() {
        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.form = this.query('form');
        this.firstName = this.query('#firstName');
        this.lastName = this.query('#lastName');
        this.email = this.query('#email');
        this.password = this.query('#password');
        this.sex = this.query('#sex');
        this.birthDate = this.query('#birth_date');
        this.redirectLink = this.query('#redirectLink');
    }

    initControllers(controller) {
        this.formController = controller;
    }

    initListeners() {
        this.setEvent(this.form, 'submit', (e) => {
            e.preventDefault();
            if(this.model.isAuthorized) {
                this.redirectLink.click();
            }
        });
    }

    signUp() {
        this.formController({
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value,
            password: this.password.value,
            sex: this.sex.value,
            birthDate: this.birthDate.value,
        });
    }
}