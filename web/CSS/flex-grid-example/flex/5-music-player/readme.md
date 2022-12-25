이미지를 1대1 비율로 유지하면서 div에 꽉찬 이미지 만들기. `object-fit`요소는 <img>나 <video> 요소의 콘텐츠 크기를 어떤 방식으로 조절해 맞출 것인지 지정합니다. 아래는 그 예시(mid class의 div 태그 내부에 img 요소가 있을 때).

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
