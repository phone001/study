const mysql = require("./config");

const todo = {
    async createTodo() {
        try {
            const table = "todolist"
            const query = "show tables where tables_in_example=?";
            const [data] = await mysql.query(query, [table]);
            if (data.length === 0) {
                const createQuery = `create table todolist(
                    id int auto_increment primary key,
                    content varchar(100),
                    img varchar(100),
                    createDate datetime default now(),
                    updateDate datetime,
                    completeDate datetime,
                    complete boolean default false
                )`;
                await mysql.query(createQuery);
            }

        } catch (e) {
            console.error(e);
        }

    },
    async getToDoListAll() {
        try {
            const query = `
            select id,content,img,complete,DATE_FORMAT(completedate,'%Y/%m/%d') as completeDate 
            from todolist`;
            const [data] = await mysql.query(query);
            console.log(data)
            if (data.length === 0) {
                return null;
            }
            return data;
        } catch (e) {
            await this.createTodo();
            console.error(e);
        }
    },
    async addToDoList(data) {
        try {
            console.log(data)
            const query = "insert into todolist(img,content,completeDate) values(?,?,?)";
            await mysql.query(query, [data.img, data.todo, new Date(data.comDate)]);
        } catch (e) {
            console.error(e);
        }
    }
}

todo.createTodo();
module.exports = todo;