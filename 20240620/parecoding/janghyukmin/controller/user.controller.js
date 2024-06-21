const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { addUser, getUserInfo } = require("../models/user.model")
require("dotenv").config();


const createHash = (pw) => {
    return new Promise((res, rej) => {
        bcrypt.hash(pw, 1, (err, result) => {
            res(result);
        })
    })
}
const compare = (pw, hash) => {
    return new Promise((res, rej) => {
        bcrypt.compare(pw, hash, (err, result) => {
            res(result);
        })
    })
}
async function addUsers(id, pw) {
    try {
        const crypt = await createHash(pw);
        await addUser(id, crypt);
    } catch (e) {
        console.log(e);
    }
}

async function getUserInfos(id, pw) {
    try {
        console.log("1");
        //데이터 베이스에서 가져온 패스워드
        const data = await getUserInfo(id);
        console.log("data : ", data)
        const check = await compare(pw, data.pw);
        console.log("check : ", check)
        const key = process.env.KEY;
        if (check) {
            return jwt.sign({
                type: 'jwt',
                name: id
            }, key, {
                expiresIn: '1m',
            });
        }
        return null;
    } catch (e) {
        console.error(e);
    }
}

function decodedToken(token) {
    const data = jwt.verify(token, process.env.key);
    console.log("dddddd");
    console.log(data)
}

module.exports = { addUsers, getUserInfos, decodedToken };