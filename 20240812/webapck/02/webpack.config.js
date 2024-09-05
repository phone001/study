const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    // module의 규칙을 설정
    module: {
        rules: [{
            //test 어떤 파일을 읽을지 
            // css가 붙은 파일을 읽어오고
            // 어떤 로더로 읽을지 확인
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
            // style-loader, css-loader: html 문서의 헤드에 style태그를 추가 이후 css의 코드를 추가
        }]
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    }
}