// 데이터베이스 사용자 설정 객체
const config = {
    dev: {
        username: "root",
        password: "root",
        database: "test",
        host: "127.0.0.1",
        // dialect : 데이터베이스의 종류
        dialect: "mysql"
    }
}

module.exports = config