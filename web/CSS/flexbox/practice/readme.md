flex에는 container에 지정할 수 있는 속성과 container 내부 item에 지정할 수 있는 속성들이 있다.

## container
container에 `display: flex`를 지정하면 해당 요소는 flex 속성을 갖는다. 

flex의 기본 축을 지정하는 `flex-direction`은 기본 값으로 `row`(가로 방향)를 갖는다(이외에 `column, row-reverse` 등을 갖는다).
이때 교차 축은 기본 축과 반대로 설정(세로 방향)된다.

`flex-wrap`은 아이템들의 크기가 지정된 container보다 커질 때 줄바꿈을 어떻게 할 것인지 설정하는 속성이다. 기본 값은 줄바꿈을 하지 않는 `no-wrap`이다.
`wrap, wrap-reverse` 속성 등이 있다.

`flex-flow`는 `flew-direction`과 `flex-wrap`을 동시에 지정할 수 있다. 예) `flex-flow: row wrap;`

`justify-content`는 메인 축을 정렬할 때 사용한다. 예를 들어 `flex-direction` 값이 `row`일 때 `center`를 지정하면 메인 축이 row이므로 가로 정렬이 된다. 지정할 수 있는 값에는 `flex-start`, `flex-end`, `space-between`(첫 번째 아이템을 시작점, 마지막 아이템을 끝점에 두고 균일하게 정렬), `space-around`(각 요소가 차지하는 여백을 균등하게 정렬), `space-evenly`(요소 사이 여백의 크기를 균일하게)

`align-items`은 교차축 방향으로의 정렬을 지정한다. 메인 축이 row이면 교차축은 세로 방향이 된다. container에 세로 크기가 지정이 되어야 한다. 기본값은 `stretch`이다. `flex-start`, `flex-end`, `center`, `baseline(문자의 기준선에 정렬)`

`align-content`은 `align-items`의 속성이 아이템이 여러 줄로 적용될 때 적용된다. 따라서 `flew-wrap`값에 wrap이 설정되어야 한다. `align-items`와 동일하게 교차축 방향으로 정렬된다.

## item
`flex-basis`는 메인 축 방향의 item 크기를 지정한다(row일 경우 가로 방향 아이템 크기(width)).

`flex-grow`는 `flex-basis`에서 지정한 기본 값에서 얼마나 늘어날 수 있는지(?)를 지정하는 속성이다. 0(늘어나지 않음)이상의 숫자 값을 갖는다. flex가 차지하는 공간을 각각의 item이 설정한 값의 비율만큼 크기를 차지한다.

`flex-shrink`는 `flex-grow`와 반대로 얼마나 줄어드는지에 대한 비율을 지정하는 속성이다. 0일 경우 줄어들지 않는다.

`flex`는 `flex-grow`, `flex-shirnk`, `flex-basis` 값을 동시에 지정할 수 있다. (예: 1 0 100px, 1 auto 등)

`align-self`는 교차축에서 개별 아이템의 정렬 방법을 지정한다. 메인 축에서의 `align-items`보다 우선한다는 특징을 갖는다.

`order`는 아이템들의 시각적인 순서를 지정한다(html에서의 순서가 바뀌는 것은 아니다). 숫자 값을 가지며, 기본 값은 0. 숫자가 작을수록 더 높은 우선순위.