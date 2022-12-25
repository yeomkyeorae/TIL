```css
@media screen and (max-width: 600px) {
  header {
    flex-direction: column;
    height: max-content;
    padding: 20px;
  }
  span {
    display: none;
  }
}
```

- 위에서 사용한 미디어 쿼리의 의미
  "screen 사이즈가 600px 이하일 경우 아래 css 적용"

- `heigth: max-content`
  max-content sizing 키워드는 콘텐츠의 본질적인 최대 너비 또는 높이를 나타냅니다. 텍스트 콘텐츠의 경우 오버플로가 발생하더라도 콘텐츠가 전혀 래핑되지 않음을 의미합니다. (by MDN)
