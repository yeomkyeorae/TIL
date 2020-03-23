# Movie App

해당 작업은 [Nomad Coders의 ReactJS로 웹 서비스 만들기 과정](https://academy.nomadcoders.co/courses/enrolled/216871)을 수행한 것입니다. Basic React를 사용해서 간단한 Movie Application을 구현해 보았습니다.



## 1. Introduction

순서대로 설치해 줍시다.

[Node.js 설치](https://nodejs.org/en/)

`npx` 설치

```bash
$ npm install npx -g
```

설치한 `npx`를 이용해서 `react` app을 만들어 보겠습니다. 

```bash
$ npx create-react-app movie_app
```

`npx create-react-app App이름`을 입력하면 쉽게 `react` app을 생성할 수 있습니다. [create-react-app](https://github.com/facebook/create-react-app)을  

사용하지 않으면 `webpack`과 `babel`을 설치해야 된다하니 서둘러 설치해 봅니다.

```bash
$ cd movie_app
$ npm start
```

생성한 react app 폴더로 들어가서 `npm start`를 하면 react가 실행되는 것을 확인할 수 있습니다.