const Sequelize = require("sequelize");
const config = require("./config");
const Users = require("./users.model");
const Posts = require("./post.model");
// Sequelize클래스 생성자
// Sequelize 객체생성
// Sequelize 생성자 함수
// 매개변수를 순서대로 줘야한다.
// 데이터베이스 이름, 사용자 이름, 비밀번호, 전체 객체 내용

// 시퀄라이즈 객체생성
const sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev);

const db = {};
db.sequelize = sequelize;
db.Users = Users;
db.Posts = Posts;

Users.init(sequelize);
Posts.init(sequelize);

Users.associate(db);
Posts.associate(db);

// 시퀄라이즈 연결
// mysql에 커넥션 요청을 보내고 
// 매핑까지

// sync() 연결 요청
// 반환 값이 프로미스
// 초기화할지
// sync({ force: true }) 실행시 초기화
sequelize.sync().then(async () => {
    // 연결 성공
    console.log("연결성공");
    // Users테이블 매핑객체
    // insert into Users(속성명) valuse(값)
    // Users.create({
    //     name: 'kim',
    //     age: 20,
    //     msg: '안녕'
    // })
    // Users.findOne({
    //     where: {
    //         name: "kim"
    //     }
    // }).then(result => {

    // // });
    // await Posts.create({
    //     content: "789"
    // })
    //Posts.findAll()
    // 조건은 ({where :{속성:조건값}})
    // const datas = await Posts.findAll();
    // const data = datas.reduce((acc, el, index) => { acc.push(el.dataValues); return acc }, []);
    // dataValues key를 파싱해서 사용하면 된다.
    // 서버측에서어 확인을 하고 있어서 axios요청 보내서 응답받으면 파싱이 되어있을 것
    // console.log(data)

    // const data = await Posts.findOne({ where: { id: 1 } })
    // console.log(data);

    // const data = await Posts.update({
    //     content: "456"
    // }, {
    //     //조건
    //     where: {
    //         id: 1
    //     }
    // })
    // await Posts.destroy({ where: { id: 1 } })


}).catch((error) => {
    // 연결 실패
    console.error(error);
});

// 테이블간에 매핑할 객체를 만들어줘야한다.
// 자바스크립트로 매칭할 내용을  객체로 작성해줘야한다.
// 사용자 객체를 만들어보자

module.exports = db;

// 게시글을 추가 삭제 수정 조회
// 사용자가 글을 쓸수 있게 