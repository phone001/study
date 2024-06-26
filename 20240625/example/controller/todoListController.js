const todo = require("../models/todoListModel");

// 
exports.getAllList = async () => {
    try {
        const data = await todo.getToDoListAll();
        return data;
    } catch (e) {
        console.error(e);
    }

}

exports.addToDoList = async (data) => {
    try {
        await todo.addToDoList(data);
    } catch (e) {
        console.error(e);
    }
}

exports.updateToDoList = (id, data) => { }
exports.deleteToDoList = (id) => { }
