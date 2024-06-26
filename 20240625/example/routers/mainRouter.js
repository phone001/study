const router = require("express").Router();
const { getAllList, addToDoList } = require("../controller/todoListController");
const { upload } = require("../public/js/imgUpload");

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

})

module.exports = router;