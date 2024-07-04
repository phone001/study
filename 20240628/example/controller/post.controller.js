const { Posts } = require("../models");

const post = {
    async create(content, user_name) {
        try {
            await Posts.create({
                content, user_name
            })
        } catch (e) {
            return e;
        }
    },
    async postSelectIndex(id) {
        try {
            return await Posts.findOne({ where: { id } });
        } catch (e) {
            return e;
        }
    },
    async postSelectAll() {
        try {
            return await Posts.findAll();
        } catch (e) {
            return e;
        }
    },
    async postDeleteIndex(id) {
        await Posts.destroy({ where: { id } });
    }
}

module.exports = post;