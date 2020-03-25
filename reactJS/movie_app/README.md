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



## 2. JSX & Props

### 1. JSX 기본 개념 및 Component 생성

`JSX` 은 React에서 나온 유일한 개념입니다. `JSX`는 자바스크립트 코드 안에 HTML가 자리잡고 있습니다. Component는 이 `JSX` 형태를 갖습니다. `Potato`라는 이름의 Component를 추가해 보겠습니다.

```javascript
// Potato.js
import React from "react";

function Potato() {
    return (
        <h3>I love potato</h3>
    )
}

export default Potato;
```

- 모든 Component는 `import React from "react";`로 명시해주어야 Component로 사용할 수 있습니다.
- `return` 값에 `HTML`코드를 가지고 있는 함수(function)로 Component는 구성됩니다.

이를 `App.js`에 `import`하여 사용하면 아래 코드와 같습니다.

```javascript
import React from 'react';
import Potato from "./Potato";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Potato />
    </div>
  );
}

export default App;
```

- `import Potato from "./Potato"` 하여 Component 생성 준비를 합니다.
- `<Potato />` 형태로 Component를 원하는 위치에서 사용할 수 있습니다. 



### 2. Props

Props를 사용해서 상위 parent component에서 하위 children component로 데이터를 보낼 수 있습니다. 이때 사용하는 것이 Props입니다. 편의상 위에 작성했던 `Potato` component를 import하는 대신 `Food` component로 대체하고 function에 Props를 적용해 보겠습니다.

```javascript
import React from 'react';

function Food(props) {
  return <h1>I like {props.fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="samgyepsal" />
      <Food fav="chocolate" />
    </div>
  );
}

export default App;
```

- function을 활용해 `Food`라는 이름의 component를 만들고, App component 안에 `<Food fav="음식 이름" />`로 `Food` component를 생성했습니다. 생성할 때 `fav`라는 변수에 "음식이름"을 할당해 전달하면 `Food`는 object 형식의 props 인자로 받아 function 내부에서 활용할 수 있습니다. `ES6` 문법으로 `{ props.fav }`로 접근합니다.
- 아래와 같은 형식으로 사용할 수도 있습니다.

```javascript
function Food({fav}) {
    return <h1>I like { fav }<h1>
}
```

