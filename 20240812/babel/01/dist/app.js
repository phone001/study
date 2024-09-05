"use strict";

//es6문법
var test = function test(msg) {
  var _console;
  var arr = [1, 2, 3];

  //스프레드 연산자
  var arr2 = [].concat(arr);

  // 템플릿 리터럴 es6
  (_console = console).log.apply(_console, arr.concat([msg]));
};
test("안녕");
