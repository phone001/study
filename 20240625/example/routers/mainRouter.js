const router = require("express").Router();
const { getAllList, addToDoList, deleteToDoList, updateToDoList, updateComplete } = require("../controller/todoListController");
const { upload } = require("../public/js/imgUpload");
const fs = require("fs");
const path = require("path");

router.get("/", async (req, res) => {
    // const data = [{
    //     id: 1,
    //     number: 1,
    //     content: 'test',
    //     completedate: '2024/00/00'
    // }];
    const data = await getAllList();


    res.render("main", { data });
});

router.post("/insert", upload.single("todoImg"), async (req, res) => {
    try {
        const data = req.body;
        data.img = `/img/${req.file.filename}`;
        console.log(data.img.length)
        await addToDoList(data);
        res.redirect("/");
    } catch (e) {
        console.error(e);
    }
});

router.put("/update", upload.single("img"), async (req, res) => {
    try {

        const data = req.body;
        console.log(req.file)
        if (req.file !== undefined)
            data.img = `/img/${req.file.filename}`
        console.log(data)
        await updateToDoList(data);

    } catch (e) {
        console.error(e)
    }
})

router.put("/completeChage", (req, res) => {
    const data = req.body;
    updateComplete(data);
    res.status(200);
    res.end();
})

router.delete("/delete", async (req, res) => {
    console.log("삭제시작")
    const { id, img } = req.body;
    console.log(req.body)
    await deleteToDoList(id, img);
    res.redirect("/");
})

module.exports = router; 