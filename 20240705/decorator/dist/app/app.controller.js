"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const controller_decorator_1 = require("../common/decorator/controller.decorator");
const app_service_1 = require("./app.service");
// app.use("/user",userRouter);
// userRouter === router.get("name",(req.res)=>{})
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    // 요청시 user/text로 해야함
    getText(req, res) {
        res.send(this.appService.getText());
    }
};
exports.AppController = AppController;
__decorate([
    (0, controller_decorator_1.Get)("/text"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getText", null);
exports.AppController = AppController = __decorate([
    (0, controller_decorator_1.Controller)('/user'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
