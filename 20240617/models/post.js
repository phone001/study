const mysql = require('./config');

// 글 조회
// 글 작성
// 글 수정
// 글 삭제
// 사용하기 편한 메서드 형태로 구성
const posts = {
    // 테이블이 없으면 생성
    initTable: async () => {
        try {
            // 테이블이 존재하는지 조회
            const result = await mysql.query("select * from posts");
            console.log(result)
        } catch (error) {
            // 에러가 발생하면 테이블이 없다.
            await mysql.query("create table posts(id int auto_increment primary key,title varchar(20),content varchar(100))");
            console.error(error)
        }
    },
    // 글의 전체 내용을 조회
    getViewPostAll: async () => {
        try {
            const [result] = await mysql.query("select * from posts");
            return result;
        } catch (error) {
            console.error("err : models : select post table", error);
        }
    },
    // 선택 글 조회
    getSelectIndexPost: async (index) => {
        try {
            const [[result]] = await mysql.query("select * from posts where id = ?", [index]);
            console.log(result)
            return result;
        } catch (error) {
            console.error("err : models : select index post table", error);
        }
    },
    setPostContent: async (title, content) => {
        try {
            await mysql.query("insert into posts(title,content) values(?,?)", [title, content]);
        } catch (error) {
            console.error("err : models : insert post table", error);
        }
    },
    // updata

}

posts.initTable();
//posts.setPostContent('제목1', '컨텐츠1');
posts.getSelectIndexPost(2);

module.exports = posts;