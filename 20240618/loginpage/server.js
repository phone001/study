//bcrypt
//강력한 암호화를 제공한다.

// $2a$[cost]$[salt][hash]
// $2A$ : 사용알고리즘
// [cost] : 키 스트레칭 횟수 값이 2의 ^n이다.
// 10이 가본값이고 10보다 크면 많이 느려진다.
// [salt] : 인코딩된 salt값 원본의 일부분을 salt값으로 사용한다. 알고리즘에서
// [hash] : 비밀번호와 salt값을 합하고 해시에서 인코딩된 값

// bcrypt : 보안에 집착하기로 유면한 openBSD에서도 사용
const bcrypt = require("bcrypt");

const createHash = (pw) => {
    return new Promise((res, rej) => {
        bcrypt.hash(pw, 10, (err, data) => {
            if (err) rej("해싱 실패");
            res(data);
        })
    })
}

const compare = (pw, hash) => {
    return new Promise((res, rej) => {
        bcrypt.compare(pw, hash, (err, same) => {
            if (err) rej(err)
            res(same)
        })
    })
}

const test = async () => {
    console.log(await createHash("123"))
    console.log(await compare("123", "$2b$10$uqTrhas0V9oNbxXTRlNQ.e2xo9i3MiC43A.7gPie7YPr7ODjojRXS"))
}
test();