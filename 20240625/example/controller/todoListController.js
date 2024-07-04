const todo = require("../models/todoListModel");
const fs = require("fs");
const path = require("path");

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

exports.updateToDoList = async (data) => {
    try {
        if (Object.keys(data).includes("todopreImg")) {
            fs.unlinkSync(path.join(__dirname, "..", "public", data.todopreImg));
            delete data.todopreImg;
        }
        const keys = Object.keys(data);
        const values = [];

        for (let index = 1; index < keys.length; index++) {
            values.push(data[keys[index]]);
        }
        values.push(data.id)
        await todo.updateTodoList(keys, values);
    } catch (error) {
        console.error(error);
    }
}
exports.updateComplete = (data) => {
    data.map(async (el) => {
        await todo.updateComplete(el.id, el.checked);
    })
}

exports.deleteToDoList = async (id, img) => {
    try {
        const p = path.join(__dirname, "..", "public", img);
        fs.rmSync(path.join(__dirname, "..", "public", img));
        await todo.delTodo(id);
    } catch (error) {
        console.error(error);
    }
}
