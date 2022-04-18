import BaseView from "../../baseUtil.js";

export default class View extends BaseView {
    constructor(model) {
        super();
        this.model = model;
        this.user = this.model.userInfo;
        this.name = null;
        this.email = null;
        this.sex = null;
        this.birthDate = null;
        this.initView();
    }

    initView() {
        this.initElements();
        this.showUserInfo();
    }

    initElements() {
        this.name = this.query('#name');
        this.email = this.query('#email');
        this.sex = this.query('#sex');
        this.birthDate = this.query('#birthDate');
    }

    showUserInfo() {
        this.name.innerText = `${this.user.firstName} ${this.user.lastName}`;
        this.email.innerText = this.user.email;
        this.sex.innerText = this.user.sex;
        this.birthDate.innerText = this.user.birthDate;
    }
}