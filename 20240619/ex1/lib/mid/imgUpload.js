const multer = require("multer");
const path = require("path");

// { upload: multer }
//multer 함수로 객체를 생성
exports.upload = multer({
    //속성을 추가
    // strage : 어느 디스크를 사용할 것인지, 메모리? 하드디스크
    storage: multer.diskStorage({
        // diskStorage : 서버 컴퓨터의 하드 디스크에 업로드 파일을 저장하는 객체를 생성
        // destination : 파일의 저장될 폴더를 지정
        destination: (req, file, done) => {
            // req 요청의 내용
            // file 파일의 정보(이름, 확장자, 크기)
            // done(에러의 메시지,저장할 폴더의 경로), 없으면 null
            done(null, "upload/") //root 경로에서부터 upload라는 경로를 찾는다.
        },
        filename: (req, file, done) => {
            // filename : 업로드하는 파일의 이름을 설정
            // file.originalname: 사용자가 업로드한 원본 파일명
            // path extname 메서드를 제공
            const ext = path.extname(file.originalname);

            // 고유한 값을 만들어 줘야한다.(이름이 중복될 수 있기 때문에)
            // 시간을 이름으로 주는 것. 코드가 아무리 빨라도 동시는 없다.
            // 저장할 파일의 이름에 시간을 포함시킨다.
            // basename : 이름에 확장자를 추가하거나 제거
            const filename = path.basename(file.originalname, ext) + "_" + Date.now() + ext;
            done(null, filename);

            // filename == 실제로 서버에 저장할 파일명

        }
    }),
    // 파일의 사이즈 설정 최대가 5MB
    limits: { fileSize: 5 * 1024 * 1024 }

})