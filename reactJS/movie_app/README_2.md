# Movie App

해당 작업은 [Nomad Coders의 ReactJS로 웹 서비스 만들기 과정](https://academy.nomadcoders.co/courses/enrolled/216871)을 수행한 것입니다. Basic React를 사용해서 간단한 Movie Application을 구현해 보기 2탄입니다.



## 1. data fetch

> axios 설치

```
$ npm i axios
```

> yts API 사용

[yts](https://yts.mx/api)는 불법 토렌트 사이트의 일종인데 API를 제공하기도 합니다.  API의 URL이 자주 변경되므로 이것 대신 니콜라스가 만든 `yts proxy API`에 `axios GET` 요청을  해보겠습니다. [yts proxy](https://github.com/serranoarevalo/yts-proxy)

> async & await

```javascript
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-		proxy.now.sh/list_movies.json");
  }
  componentDidMount() {
    this.getMovies();
  }
  render (){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>
  }
}
```

- `axios.get(URL)` 요청을 하는 `getMovies` 함수을 만들었습니다. `axios` 요청은 `response`를 받는 데 시간이 걸리므로 이를 기다려줄 필요가 있습니다.
- `async` 선언으로 비동기 함수(참을성을 기를 필요 있는 함수)임을 알려주고, 그 대상인 `axios`임을 `await`로 알려줍니다.



> setState data 및 data별 component 생성

```javascript
// App.js
import React from 'react';
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false }) // state의 movies와 axios의 movies를 동시에 인식할 수 있다.
  }
  componentDidMount() {
    this.getMovies();
  }
  render (){
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : movies.map(movie => {
      return (
        <Movie 
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image}
        />
      );
    })}</div>
  }
}
```

```javascript
// Movie.js
import React from "react";
import PropTypes from 'prop-types';

function Movie({id, year, title, summary, poster}) {
    return <h5>{title}</h5>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;
```



## 2. styling components

Component를 CSS로 꾸밀 경우에 `.css` 파일을 만들고 class를 사용하자!



## 3. Adding genres

>  `ES6`에서 제공하는 `map`에는 `index` 기능을 제공한다.

 ```javascript
<ul className="genres">
  {genres.map((genre, index)=> (
    <li key={index} className="genres__genre">{genre}</li>
  ))}
</ul>
 ```

`key` 값을 넣어줘야 하지만 마땅한 값이 없을 때 이 `index`를 사용할 수 있다.



> `JSX`에서는 HTML코드가 아니다. `JSX`에서 `class` 이름을 명시하고자 할 때는 `class` 대신 `className`을 사용한다.

```javascript
<div className="loader">
  <span className="loader__text">Loading...</span>
</div>
```

또한, `<label for ... >`처럼 `for`를 사용하고자 할 때는 `HTMLfor`를 사용한다.