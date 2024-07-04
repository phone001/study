const container = require("./");
const UserModel = require("../model/user.model");
const UserRepo = require("../repository/user.repo");
const UserService = require("../service/user.service");
const UserController = require("../controller/user.controller");
// 데이터베이스 모델
// 레파지토리
// 서비스로직
// 컨트롤러
// 왜? nestJS 사전지식

// 데이터 베이스 모델
container.register("UserModel", UserModel, []);
// 레파지토리
container.register("UserRepo", UserRepo, ["UserModel"])
// 서비스
container.register("UserService", UserService, ["UserRepo"])
// 컨트롤러
container.register("UserController", UserController, ["UserService"])

module.exports = container;