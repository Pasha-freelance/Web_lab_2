import View from "./view.js";
import Controller from "./controller.js";
import Model from "./model.js";

const model = new Model();
const view = new View(model);
new Controller(view, model);