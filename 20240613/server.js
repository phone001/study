// mysql 연결
// 외부 모듈을 설치해서 사용할 것
// 설ㅣ하는 모듈을 mysql 자체가 아니고 드라이버

// mysql mysql2 모듈 설치
// mysql 모듈은 콜백방식, 2는 promise기반

// mysql2 connet를 할 수 있는 메서드 지원
// 필요한 정보
// 유저이름
// 유저 비밀번호
// database이름
// host
// port

const mysql = require('mysql2');
const mysqlS = require('mysql2/promise');

const query = "select * from products"
const query1 = 'create table products(id int auto_increment primary key, name varchar(10),number int)';
const DBInfo = {
    user: 'root',
    password: 'root',
    database: 'test',
    multipleStatements: true
}

// // mysqlConnect : 객체를 반환받는데 쿼리작업을 할 수있는 메서드가 포함되어있다.
// // query 메서드 : 쿼리문을 매개변수로 전달하면 실행 결과를 받을 수 있다.
const mysqlConnect = mysql.createConnection(DBInfo);
//mysqlConnect.query(query1)
mysqlConnect.query(query, (err, data) => {
    if (err) {
        console.log("테이블 없음")
        mysqlConnect.query(query1)
    } else {
        console.log(data)
    }
})

// query의 두번째 인자로 value라는 배열이 올수 있음
// 쿼리에 동적으로 들어갈 수 있는 값

const insertQuery = "insert into products (name,number) values(?,?)";
mysqlConnect.query(insertQuery, ['test2', 2], (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("추가 완료")
})

mysqlConnect.query(query, (err, data) => {
    if (err) {
        console.log("테이블 없음")
        mysqlConnect.query(query1)
    } else {
        console.log(data)
    }
})
// const connect = async () => {
//     console.log("!!")
//     return await (await mysqlS.createConnection(DBInfo)).connect();
// }

// // const con = connect();
// const delQuery = "delete from products where id = ?; set @cnt = 0;update products set id=@cnt:=@cnt+1;alter table products auto_increment=0;";
// mysqlConnect.query(delQuery, [1], (err, data) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('삭제완료')

// })

mysqlConnect.query(query, (err, data) => {
    if (err) {
        console.log("테이블 없음")
        mysqlConnect.query(query1)
    } else {
        console.log(data)
    }
})

const updateQuery = "update products set name = ?, number = ? where id=?";
mysqlConnect.query(updateQuery, ['test3', 3, 2], (err, data) => {
    if (err) {
        console.log("테이블 없음")
        mysqlConnect.query(query1)
    } else {
        console.log(data)
    }
})

mysqlConnect.query(query, (err, data) => {
    if (err) {
        console.log("테이블 없음")
        mysqlConnect.query(query1)
    } else {
        console.log(data)
    }
})