// nodejs의 stream 내장모듈
// Transform 스트림 데이터를 읽고 데이터를 변환한 뒤 다른 스트림으로 전달하는데 사용
const { Transform } = require("stream");

// nodejs의 내장 모듈 중 하나로 파일 시스템을 조작하기 위한 모듈
const fs = require("fs");

// 청크의 크기
// 스트림에서 자겅ㅂ할 때 데이터를 받고 처리할 때 마다 각 청크를 조작한다.

const chunkSize = 64 * 1024;// 64KB

const TransformData = new Transform({
    highWaterMark: chunkSize,
    // transform => 청크를 변환하는 메서드
    transform(chunk, en, callback) {
        // 받아온 청크를 ㅂ문자열로 변환 대문자로 변경해서 스트림 전달 
        this.push(chunk.toString().toUpperCase())//데이터를 삽입
        //변환이 완료되면 콜백 호출
        callback();
    }
});
// 스트림으로 파일의 데이터를 읽어보자.
// 스트림 데이터를 읽어온다. 매개변수는 파일의 경로
// highWaterMark : 청크의 크기를 설정해서 읽는 스트림
const test = fs.createReadStream("test.txt", { highWaterMark: chunkSize });
console.log(test)

// 파일 쓰기 스트림 생성
const test2 = fs.createWriteStream("test2.txt");

// 스트림으로 내용을 파일에서 파일로 이동
// pipe : 메서드를 호출한 객체의 내용을 매개변수로 전달한 스트림 객체에 내용을 이동시킨다.
// 청크데이터를 전부 대문자로 작성한 후 text2파일에 복사
test.pipe(TransformData).pipe(test2);
