// 게시글 라우터들
const router = require("express").Router();
const { ViewPostAll, ViewIndexPost, SetPostContent } = require('../controllers/post')

router.get("/", async (req, res) => {
    // 요청을 받고 컨트롤러에서 어떤 작업을 처리할건지
    // view 데이터를 받아 페이지를 완성
    // 전체 게시글 요청
    try {
        const data = await ViewPostAll();
        res.render("main", { data });
    } catch (error) {
        console.error(error);
    }
});

router.get("/insert", (req, res) => {
    res.render("insert");
})

router.post("/insert", async (req, res) => {
    try {
        const { title, content } = req.body;
        await SetPostContent(title, content);
        res.redirect("/post");
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;