"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = Module;
function Module(metadata) {
    return (target) => {
        // 클래스에게 모듈의 메타데이터를 저장
        Reflect.defineMetadata("module", metadata, target);
    };
}
