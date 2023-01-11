- `@media screen and (max-width: 1000px)`의 의미: 스크린의 가로 사이즈가 1000px 이하일 경우 아래 선언문에 해당하는 CSS를 적용.
  예를 들어,

```css
@media screen and (max-width: 1000px) {
  main {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

위와 같을 경우 main 태그에 `grid-template-columns`속성에 선언한 값을 적용한다.
