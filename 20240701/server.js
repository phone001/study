// MVC패턴
// service    : 비즈니스로직을 처리하는 곳. repository 데이터를 받아 컨트롤러에 전달하는 역할
// repository : 데이터 베이스 접근 로직을 서비스에서 분리해서 코드의 책임을 명확히 하는 곳
// 단순하게 http 요청과 응답만 처리할 수 있도록 분리 코드의 응집도를 높이는 것. 유지보수가 편하다.

// 사용자의 내용만 데이터베이스에서 repository. service

class UserService {
    constructor(userRepository) {
        this.UserRepository = userRepository;
    }
    async getUserIndex(id) {

        return await this.UserRepository.findUserIndex(id);
    }
}

class UserRepository {
    // db
    constructor(db) {
        this.db = db; // db객체를 생성자에서 받고
    }
    async findUserIndex(_id) {
        // 데이터베이스의 값을 조회
        return await this.db.findOne((user) => user.id === parseInt(_id));
    }
}

// 데이터 베이스 가정 User
const dataBase = {
    users: [
        { id: 1, name: "kim" },
        { id: 2, name: "kim2" }
    ],
    findOne(fn) {
        return this.users.find(fn);
    }
}


const express = require("express");
const path = require("path");
const app = express();

// 의존성 인스턴스
const userRepository = new UserRepository(dataBase);
const userService = new UserService(userRepository);

// userController 
class Usercontroller {
    constructor(userService) {
        this.userService = userService;
    }
    async getUser(req, res) {
        const { id } = req.params;
        const user = await this.userService.getUserIndex(id);
        res.send(user);
    }
}

// 의존성 주입
const userController = new Usercontroller(userService);


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

//app.get("/users/:id", userController.getUser);
app.get("/users/:id", (req, res) => userController.getUser(req, res));

app.listen(3000, () => {
    console.log("server on");
});