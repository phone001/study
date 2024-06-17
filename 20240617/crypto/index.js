const crypto = require("crypto");
const express = require("express");
const mysql2 = require("mysql2/promise");
const path = require("path");
const app = express();

const pw = "admin123";

// 해시화 : 알고리즘을 통해 데이터를 고정된 크기의 고유한 값으로 바꿔주는 행우
// 16진수의 값으로 변환, 고정된 크기의 문자열로

// 알고리즘 sha256 알고리즘
// 데이터를 256비트의 고정 크기값으로 변환해주는 알고리즘
// 원본 데이터의 길이에 산관이 없이 고정크기의 해시값으로 변경해준다.
// 64자리의 16진수로 표현 
const hash = crypto.createHash("sha256");

// 검증 로직
// hash 암호화 알고리즘만 정했으나
// update : 문자열을 해시화
const hashing = hash.update(pw);
console.log(hashing);

// hex 문자열로 변경
// 문자열을 16진수로 변경
const hashString = hashing.digest("hex");
console.log(hashString);

// 해시화화면 일정한 문자열이 계속 나옴
// salt값을 사용하여 예측이 불가능한 데이터를 만들어주면된다.
// salt값은 코드에 작성되면 유출될 가능성이 있다.
// .env
// env유닉스 운영체제에서 사용하는 쉘 환경변수

// 환경변수를 가져오는 방법
// dotenv라는 외부모듈을 설치하여 가져온다.
// const env = require("dotenv");

// salt 생성
// 난수 생성 메서드 사용해서 salt값을 만들어보자
// 만들어진 값으로 salt로 DB에 저장
crypto.randomBytes(32, (err, result) => {
    //32비트의 길이의 랜덤한 byte가 생성
    if (err) {
        console.log(err);
    } else {
        // 결과로는 16진수를 출력
        console.log(result.toString("hex"))
    }
})

// salt값도 노출되기 힘들고
// 해커를 좀더 힘들게 하는 방법
// 키 스트레칭 기법
// 해시 함수를 여러번 반봅시켜 시간을 일부러 오래걸리게 하는 기법
// 해킬을 시도할 때 비밀번호를 대입해서 해킹을 시도하는 경우 암호화 작업을 일부러 오래걸리게 만들어 해킹을 어력게 만드는게 목적
const createSalt = () => {
    return new Promise((res, rej) => {
        crypto.randomBytes(64, (err, result) => {
            res(result.toString("hex"));
        })
    })
}

const createHash = (salt, password) => {
    return new Promise((res, rej) => {
        crypto.pbkdf2(
            password,// 해싱할 문자열
            salt,
            165165, // 키 스트레칭 반복 횟수
            64, // 해시값의 바이트
            "sha256",
            (err, hash) => {
                if (err) rej(err);
                res(hash.toString("hex"));
            }
        )
    })
}

// const test = async () => {
//     const salt = await createSalt();
//     const hash = await createHash(salt, "admin123");
//     console.log(hash);
// }
// test();

// bcrypto


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"))

const mysql = mysql2.createPool({
    user: 'root',
    password: "root",
    database: "mypage",
    multipleStatements: true
})

// 테이블 초기화 
const userInit = async () => {
    try {
        await mysql.query("select * from users");
    } catch (error) {
        await mysql.query("create table users(id int auto_increment primary key, uid varchar(20), upw varchar(128),salt varchar(128))")
        console.error(error)
    }
}

userInit();

app.get("/join", (req, res) => {
    res.render("join");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/join", async (req, res) => {
    const { uid, upw } = req.body;
    const salt = await createSalt();
    const hash = await createHash(salt, upw);
    await mysql.query("insert into users(uid,upw,salt) values(?,?,?)", [uid, hash, salt]);
    res.redirect("/login");
})


// 반복횟수와 saltㄱ밧
app.post("/login", async (req, res) => {
    const { uid, upw } = req.body;
    const [[result]] = await mysql.query("select * from users where uid=?", [uid]);

    // 키가 있으면 true, 없으면 false
    if (result?.salt) {
        const { salt } = result;
        const hash = await createHash(salt, upw);
        if (hash == result.upw) {
            res.send("로그인 됨");

        } else {
            res.send("비밀번호오류");
        }
    } else {
        res.send("계정 없음")
    }
})



app.listen(3000, () => {
    console.log("서버 온");
})