flex에는 container에 지정할 수 있는 속성과 container 내부 item에 지정할 수 있는 속성들이 있다.

container에 `display: flex`를 지정하면 해당 요소는 flex 속성을 갖는다. 

flex의 기본 축을 지정하는 `flex-direction`은 기본 값으로 `row`(가로 방향)를 갖는다(이외에 `column, row-reverse` 등을 갖는다).
이때 교차 축은 기본 축과 반대로 설정(세로 방향)된다.

`flex-wrap`은 아이템들의 크기가 지정된 container보다 커질 때 줄바꿈을 어떻게 할 것인지 설정하는 속성이다. 기본 값은 줄바꿈을 하지 않는 `no-wrap`이다.
`wrap, wrap-reverse` 속성 등이 있다.