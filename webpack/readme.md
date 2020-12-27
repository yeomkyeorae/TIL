## NPM

npm install gulp	(설치)	(dependencies)

npm uninstall gulp	(삭제)

npm install gulp --global	(전역 설치)

npm install vue --save-dev	== npm install -D 	(devDependencies)



dependencies(배포용) vs devDependencies(개발용)

전자는 application의 로직을 구현하는 것과 연관	예시) react, angular, vue, jquery

후자는 개발을 할 때 도움을 주는 개발 보조 라이브러리?	예시) webpack, sass, js-compression

`npm run build`를 하면 devDependencies는 설치되지 않는다.



## Webpack

웹팩이란 프런트엔드에서 사용하는 모듈 번들러이다. 모듈 번들러는 웹 어플리케이션을 구성하는 수십, 수백개의 자원을 하나의 파일로 병합 및 압축 해주는 작업을 말한다. 웹팩에서의 모듈은 자바스크립트 모듈에만 국한되지 않고, 웹 어플리케이션을 구성하는 모든 자원을 의미한다.

npm run build

```json
"scripts":
	"build": "webpack --mode=none"
```

mode에는 none production development 3가지 존재. 결과물은 dist/main.js로 생성.

```json
"scripts":
	"build": "webpack --mode=none --entry=src/index.js --output=public/output.js"
```

위 처럼 entry와 output을 지정할 수 있다. 옵션이 길어 질 수 있으므로 웹팩 설정 파일을 할용한다.

> webpack.config.js

```javascript
// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

> 웹팩을 적용하기 전과 후의 차이

개발자도구의 네트워크 패널로 검사하면 전자는 라이브러리 요청 개수에 따라 request 수가 많아질 수도 있고, 후자는 request에 대한 요청이 더 적다.

> dist/main.js

main.js는 즉시 실행 함수로 구성돼 있다. IIFE(Immediately Invoked Function Expression)

> webpack 설명 영상

[webpack from first principles](https://www.youtube.com/watch?v=WQue1AN93YU)



## 웹팩의 등장 배경

1. 파일 단위의 자바스크립트 모듈 관리의 필요성
2. 웹 개발 작업 자동화 도구(Web Task Manager)
3. 웹 어플리케이션의 빠른 로딩 속도와 성능



## 웹팩으로 해결하려는 문제

1. 자바스크립트 변수 유효 범위
2. 브라우저별 HTTP 요청 숫자의 제약
3. 사용하지 않는 코드의 관리
4. Dynamic loading & Lazy loading 미지원

## Babel

babel is a javascript compiler.

## 웹팩의 주요 속성 4가지

1. entry - 웹 자원을 변환하기 위한 최초의 진입점 
2. output - 웹팩을 돌리고 난 결과물의 파일 경로, filename과 path를 함께 작성
3. loader - 웹팩이 웹 어플리케이션을 해석할 때 `자바스크립트 파일이 아닌 웹 자원`들을 변환할 수 있도록 도와주는 속성
   - module로 작성
   - use의 배열에 들어가는 순서도 중요하다. 오른쪽에서 왼쪽 순서로 적용된다!
4. Plugins - 결과물에 대한 형태를 변형하는 역할. 기본적인 동작에 추가적인 기능을 제공. Plugins 배열에는 객체의 인스턴스만 추가가 가능하다.

예시)

```javascript
// webpack.config.js
var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}
```

## 참고 자료

[웹팩 공식 사이트](https://webpack.js.org/)

## 웹팩 데브 서버(webpack dev server)

웹팩 데브 서버는 웹팩의 빌드 대상 파일이 변경되었을 때 코드만 변경하고 저장하면 자동으로 웹팩으로 빌드하고 브라우저를 새로고침 해주는 기능이다. 결과물은 파일이 아닌 인메모리에 결과를 저장한다.

> 특징

1. 코드에 변경 사항이 발생하면 바로 웹팩을 빌드하고, 브라우저 새로고침을 함.
2. 번들링된 파일이 생성되지 않고, 메모리 상에 빌드 결과를 가지고 있음.

> HtmlWebpackPlugin

```javascript
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
```

index.html 템플릿을 기반으로 빌드 결과물을 추가해줌. index.html에 script 태그를 생성해준다.



## 퀴즈

```javascript
var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
};

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }

```

