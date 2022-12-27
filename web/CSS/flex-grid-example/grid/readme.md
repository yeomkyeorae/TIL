grid는 단방향의 layout를 지정하는(?) flex의 한계를 보완하고자 등장한 layout 기술이다. 표처럼 생긴 layout를 지정하는 데 사용된다.
grid를 사용하기 위해서는 `display` 속성에 `grid`를 명시해준다.
grid layout에서 각 행의 크기를 지정하기 위해서는 `grid-template-columns` 속성을 사용한다.
각 열의 크기를 지정할 때는 `grid-template-rows`

```css
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 50px 150px 300px; /* 첫 번쨰 컬럼 50px, 두 번째 컬럼 150px, ...*/
  grid-template-rows: 1fr 3fr; /* 전체 container의 크기 대비 각 item이 차지하는 비율을 지정할 때는 fr 키워드를 사용한다. */
}
```
