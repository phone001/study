"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMdule = void 0;
const module_decorator_1 = require("../common/decorator/module.decorator");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
let AppMdule = class AppMdule {
};
exports.AppMdule = AppMdule;
exports.AppMdule = AppMdule = __decorate([
    (0, module_decorator_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppMdule);
