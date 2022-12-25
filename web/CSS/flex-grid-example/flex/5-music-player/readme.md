이미지를 1대1 비율로 유지하면서 div에 꽉찬 이미지 만들기. `object-fit`요소는 img나 video 요소의 콘텐츠 크기를 어떤 방식으로 조절해 맞출 것인지 지정합니다. 아래는 그 예시(mid class의 div 태그 내부에 img 요소가 있을 때).

```css
.mid {
  aspect-ratio: 1 / 1;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

`object-fit: cover`는 대체 콘텐츠의 가로세로비를 유지하면서, 요소 콘텐츠 박스를 가득 채웁니다. `서로의 가로세로비가 일치하지 않으면 객체 일부가 잘려나갑니다.`
`contain`의 경우 대체 콘텐츠의 가로세로비를 유지하면서, 요소의 콘텐츠 박스 내부에 들어가도록 크기를 맞춤 조절합니다. 콘텐츠가 콘텐츠 박스 크기에 맞도록 하면서도 가로세로비를 유지하게 되므로, 서로의 가로세로비가 일치하지 않으면 객체가 레터박스(?)처럼 됩니다. (by [mdn](https://developer.mozilla.org/ko/docs/Web/CSS/object-fit))
