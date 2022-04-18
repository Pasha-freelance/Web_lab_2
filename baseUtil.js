export default class BaseUtilCLass {
    constructor() {}

    query(selector) {
        return document.querySelector(selector);
    }

    queryAll(selector) {
        return document.querySelectorAll(selector);
    }

    setEvent(element, event, callback) {
        element.addEventListener(event, callback);
    }

    authGuard(redirectLink, isAuthorized) {
        if (!isAuthorized) {
            redirectLink.click();
        }
    }
}