// 전체 게시글을 보여줄 기능을 내보낼 모듈에 추가
const { posts } = require("../models");
exports.ViewPostAll = async () => {
    try {
        // 데이터를 조회한다.
        const data = await posts.getViewPostAll();
        // 데이터를 파싱하는 부분은 서비스로직으로
        return data;
    } catch (e) {
        console.error(e);
    }
};

exports.ViewIndexPost = async (index) => {
    try {
        const data = await posts.getSelectIndexPost(index);
        return data;
    } catch (error) {
        console.error(error)
    }
};

exports.SetPostContent = async (title, content) => {
    try {
        await posts.setPostContent(title, content);
    } catch (error) {
        console.error(error);
    }
};