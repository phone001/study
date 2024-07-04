class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getUser(req, res) {
        const { id } = req.params;
        console.log(id)
        const user = await this.userService.getUser(id);
        res.send(user);
    }

    async signup(req, res) {
        try {
            const { name, age, msg } = req.body;
            await this.userService.signup(name, age, msg);
            res.send("회원가입 완료");
        } catch (e) {
            console.error(e)
        }
    }
}
module.exports = UserController;