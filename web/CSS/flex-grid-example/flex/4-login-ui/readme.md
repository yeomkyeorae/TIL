- `em`과 `rem`은 `font-size`를 속성 값을 기준으로 계산된다. em의 경우 해당 단위가 사용되고 있는 요소의 `font-size`가 기준 값이며, rem의 경우 root의 `font-size`를 기준으로 한다.
- em 예시

```css
div {
  font-size: 20px;
  width: 10em; /* 200px */
}
```

- rem 예시

```css
html {
  font-size: 20px;
}

div {
  font-size: 10px;
  width: 10em; /* 200px */
}
```
