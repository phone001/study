const { Users } = require("../models");

const user = {
    async create(name, age, msg) {
        try {
            await Users.create({
                name, age, msg
            });
        } catch (error) {
            return error;
        }
    },
    async userSelectAll() {
        try {
            return await Users.findAll();
        } catch (e) {
            return e;
        }
    },
    async userSelectName(name, model) {
        try {
            // 시퀄라이즈 join은 include
            return await Users.findOne({ where: { name }, include: { model } });

        } catch (error) {
            return error;
        }
    }

}

module.exports = user;