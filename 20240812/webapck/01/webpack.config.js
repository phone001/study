const path = require("path");
// npx webpack을 실행하면
// webpack의존성에서  webpack.config.js파일을 찾고 import해서
// 속성값을 사용해서 컴파일한다.
// 키값을 동일하게 해줘야함
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "bundle.js",// react에서 빌드하면 dist폴더에 bundle.js로 작성이 된다.
        path: path.join(__dirname, "dist"),
    }
}