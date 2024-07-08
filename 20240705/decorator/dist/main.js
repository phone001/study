"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_modules_1 = require("./app/app.modules");
const router_utils_1 = require("./common/utils/router.utils");
function bootStrap() {
    const app = (0, express_1.default)();
    const appModule = new app_modules_1.AppMdule();
    const moduleMetaData = Reflect.getMetadata("module", app_modules_1.AppMdule);
    moduleMetaData.controllers.forEach((controller) => {
        const router = (0, router_utils_1.createRouter)(controller, moduleMetaData.providers);
        app.use("/", router);
    });
    app.listen(3000, () => {
        console.log("server");
    });
}
bootStrap();
