// 데이터를 다루는 곳은 데이터베이스에서 다룬다.
// 연결 설정을 이곳에서 

const mysql = require("mysql2/promise");

// create Connection에서 제공받은 메서드 콜백함수 기반을 제공받앗고
// promise를 반환해준다.
// createConnection : 기본적인 연결을 제공하는 메서드를 테스트할 때 

// 커넥션 풀을 생성하고 관리할 수 있는 메서드
// 여러명이 동시에 요청을 보내도 성능저하가 없고 성능이 유지된다.

const info = {
    // host: "localhost",
    // port: "3306",
    user: 'root',
    password: 'root',
    multipleStatements: true,
    database: 'mypage',
}
const connectInit = mysql.createPool(info);
// 커넥션 테스트
connectInit.getConnection((err) => {
    console.log(err)
});

module.exports = connectInit;