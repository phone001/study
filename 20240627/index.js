const fs = require("fs");
const { faker } = require("@faker-js/faker");
const file = fs.createWriteStream("student.csv");

const classArr = ['devops', 'game', 'story'];

//테이블의 컬럼
file.write("id,name,email,age,class\n");
for (let index = 0; index < 100000; index++) {
    const id = index + 1;
    const name = faker.internet.userName();
    const email = faker.internet.email();
    const age = Math.floor(Math.random() * 100) + 1;
    const className = classArr[Math.floor(Math.random() * 3)];
    file.write(`${id},${name},${email},${age},${className}\n`);
}
file.end();
console.log("파일생성");
