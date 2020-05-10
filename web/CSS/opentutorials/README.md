# 생활코딩 CSS 정리

## 1. 부모 자식 선택자

`ul` 밑에 있는 모든 `li` 태그를 선택한다.

```css
ul li {
    color: red;
}
```

`#lecture` 바로 밑에 있는 `li` 태그를 선택한다.

```css
#lecture > li {
    border: 1px solid red;
}
```

 `ul`과 `ol`을 동시에 선택한다.

```css
ul, ol {
    background-color: skyblue;
}
```

