"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = Controller;
exports.Get = Get;
require("reflect-metadata");
// 컨트롤러 클래스에게 줌
function Controller(basePath) {
    return (target) => {
        //basePath 이름으로 메타데이터 정의
        // basePath 값을 전달하고
        // target 함수
        Reflect.defineMetadata("basePath", basePath, target);
    };
}
function Get(path) {
    return (target, prop, script) => {
        // script.value : 메서드의 객체
        // script.writable : 메서드 변경가능한지 여부
        // path를 메타데이터로 저장
        Reflect.defineMetadata("path", path, script.value);
        // http 메서드를 get메서드 내용 저장
        Reflect.defineMetadata("method", "get", script.value);
    };
}
