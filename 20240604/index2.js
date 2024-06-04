const data = {
    name: "kim",
    age: 20
}

console.log(data);
console.log(JSON.stringify(data));

const dataStr = JSON.stringify(data)
//인코딩
const buf = Buffer.from(dataStr) //기본 인코딩은 utf8
console.log(buf.toJSON());
console.log(buf.toString());
console.log(JSON.parse(buf.toString()))