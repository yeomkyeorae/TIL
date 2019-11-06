// webpack 설정
const VueLoaderPlugins = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    // 여러 개의 파일을 읽어오기
    entry: {
        app: path.join(__dirname, 'src', 'main.js')
    },
    // 관련된 모듈
    module: {
        rules: [
            {
                test: /\.vue$/, //.vue 확장자 파일은 vue-loader로 번역을 해라
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugins()
    ],
    // 최종 결과
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
}