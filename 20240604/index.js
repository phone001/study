const { Buffer } = require("safe-buffer");

const str = "Hello Buffer a";

//const buffer1 = Buffer.alloc(10)// size가 10인 버퍼객체를 만든다.(10 byte)
/*
 위의 코드는 size가 10이기 때문에 내용이 더 있어도 잘림
*/
const buffer1 = Buffer.alloc(str.length)// size가 10인 버퍼객체를 만든다.(10 byte)
const buffer2 = Buffer.from("Hello Buffer")// Buffer "Hello Buffer" 데이터를 담아준다.

console.log(buffer1.toJSON())
console.log(buffer2.toJSON())

console.log("=================")

buffer1.write("Hello Buffer a");//빈 공간에 버퍼에 내용을 삽입

// 버퍼를 디코딩
console.log(buffer1.toString())

console.log("=================")

const buffer3 = Buffer.from("abcd");
for (let i = 0; i < buffer3.length; i++) {
    console.log(buffer3[i]);
    buffer3[i] = buffer3[i] + 1;
}
console.log(buffer3.toString());

let a = "A";
let b = 12;
// charCodeAt 아스키 코드로 변환
// 매개변수는 인덱스 문자의 위치
// toString(2) == 이진수 문자열로 변환 배개변수로 전달한 값이 진수
// UTF8은 8비트
// padStart() 문자열의 크기에서 남은 공간을 다 전달한 매개변수 문자열로 채워준다
a = a.charCodeAt(0).toString(2).padStart(8, "0");
console.log(a)
b = b.toString(2).padStart(8, "0");
console.log(b)
let c = a + b;
console.log(c)

const binaryToString = (str) => {
    let temp = "";
    for (let i = 0; i < str.length; i += 8) {
        // 2진수를 정수로 변환함
        const strTemp = parseInt(str.substr(i, 8), 2);
        console.log(strTemp);
        if (String.fromCharCode(strTemp) == false) {
            temp += strTemp;
        }
        temp += String.fromCharCode(strTemp);
    }
    return temp;
}

const res = binaryToString(c);
console.log(res);

