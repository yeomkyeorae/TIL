`grid-template-columns/rows`에서 지정한 행과 열의 개수를 벗어나는 요소에 대해서 그 크기의 기본 크기를 지정하도록 한다.

```css
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr; /* 모두 동일하도록 설정 */
  gap: 30px;
}
```

`aspect-ratio` 속성은 박스 내부에서 태그가 차지하는 비율을 지정한다. `1 / 1`(가로 / 세로)과 같이 지정할 경우 1:1 비율을 유지하도록 한다. 사이즈를 자동 계산할 때 참고되는 값이다.
