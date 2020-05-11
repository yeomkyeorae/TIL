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



## 2. 가상 클래스 선택자

~~~css
a:link {
  color: blue;
}
a:visited {
  color: red;
}
a:hover {
  color:yellow;
}
a:active {
  color: green;
}
a:focus {
  color: white;
}
~~~

- link: 방문한 적이 없는 링크
- visited: 방문한 적이 있는 링크
- hover: 마우스를 올려놓았을 때 
- active: 마우스를 클릭했을 때
- focus: `tab` 등으로 포커싱 되었을 때

