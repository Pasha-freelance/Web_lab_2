import BaseController from "../../baseUtil.js";

export default class Controller extends BaseController {
    constructor(view, model) {
        super();
        this.view = view;
        this.model = model;
        this.guardBtn = null;
        this.initElements();
        this.authGuard(this.guardBtn, this.model.isAuthorized);
    }

    initElements() {
        this.guardBtn = this.query('#authRedirect');
    }
}