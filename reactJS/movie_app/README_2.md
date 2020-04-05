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