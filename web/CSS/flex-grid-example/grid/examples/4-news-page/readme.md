- `article:first-child`는 article 요소의 첫번째 자식을 의미한다.
- `article:nth-child(2)`는 article 요소의 두번째 자식을 의미한다.
  - 참고로
  - `nth-child(odd)`는 홀수 자식
  - `nth-child(even)`는 짝수 자식
  - `nth-child(5n)`는 5번째, 10번째, 15번째 자식을 의미한다.

아래와 같은 예제에서는

```css
article:first-child {
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  font-size: 200%;
  font-weight: bold;
}
```

article 태그의 첫번째 자식의 경우 column 방향의 grid를 3칸 차지하면서(grid-column), 첫번째 자식 내부 column 방향의 grid는 2칸을 같은 크기로 지정하고 있다(grid-template-columns).
