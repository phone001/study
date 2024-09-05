const path = require("path");
// 번들링이 될 때 html생성 설정 속성을 줄 수 있는 플러그인
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [{
            // 읽을 파일의 확장자 js와 jsx
            test: [/\.(js|jsx)$/],
            // 읽는 내용에서 제외시키고 싶은 파일들 혹은 폴더
            exclude: /node_modules/,
            use: ["babel-loader"]
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist", "src")
    },
    // 사용할 플러그인
    plugins: [
        //html을 생성해줄 플러그인
        new HtmlWebpackPlugin({
            // template 우리가 번들링된곳에 생성할 html의 내용을 제공할 파일
            template: "./src/index.html",
            // 번들링 해서 생성될 html의 이름
            filename: "myIndex.html"
        })
    ],

}

