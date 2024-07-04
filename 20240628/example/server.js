const express = require("express");
const path = require("path");
const method = require("method-override");
const userController = require("./controller/user.controller");
const postController = require("./controller/post.controller");
const { Posts } = require('./models');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(method("_method"));
app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    const users = await userController.userSelectAll();
    res.render("main", { data: users });
});

app.get("/create", (req, res) => {
    res.render("create");
})

app.post("/create", async (req, res) => {
    const { name, age, msg } = req.body;
    await userController.create(name, age, msg);
    res.redirect("/");
})

app.post("/post_create", async (req, res) => {
    const { content, user_name } = req.body;
    await postController.create(content, user_name);
    res.redirect(`/view/${user_name}`);
});

app.get("/view/:name", async (req, res) => {
    const { name } = req.params;

    const data = await userController.userSelectName(name, Posts);
    // 쿼리문이 두번 동작한다.
    // 유저를 찾고 글을 찾는 쿼리를 한번더 호출하면 쿼리가 두번
    // 관계형 join으로 조회를 하면 누가 작성한 글인지 
    // 시퀄라이즈 orm은 외래키가 없으면 join을 할 수 없다.
    console.log(data);
    res.render("view", { data });
})

app.delete("/post_delete", async (req, res) => {
    const { id, user_name } = req.body;

    await postController.postDeleteIndex(id);

    res.redirect(`/view/${user_name}`);
})

app.listen(3000, () => {
    console.log("server on");
});