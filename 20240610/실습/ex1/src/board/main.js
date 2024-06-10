const listData = require("../data/listData");

function main(res) {

    res.render("./board/boardList", {
        "listData": listData.getListData()
    });
}
module.exports = { main };