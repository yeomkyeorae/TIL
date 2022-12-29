# Grid - container

## 1. grid 기본 개념

grid는 단방향의 layout를 지정하는(?) flex의 한계를 보완하고자 등장한 layout 기술이다. 표처럼 생긴 layout를 지정하는 데 사용된다.
grid를 사용하기 위해서는 `display` 속성에 `grid`를 명시해준다.
grid layout에서 각 행의 크기를 지정하기 위해서는 `grid-template-columns` 속성을 사용한다.
각 열의 크기를 지정할 때는 `grid-template-rows`

.container {

```css
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 50px 150px 300px; /* 첫 번쨰 컬럼 50px, 두 번째 컬럼 150px, ...*/
  grid-template-rows: 1fr 3fr; /* 전체 container의 크기 대비 각 item이 차지하는 비율을 지정할 때는 fr 키워드를 사용한다. */
}
```

## 2. gap

간격을 사용할 때는 `gap` 속성을 사용하면 된다. 열 사이의 갭은 `column-gap`, 행 사이의 갭은 `row-gap`. 한번에 열과 행의 갭을 지정하고자 한다면 `gap: 30px 10px`과 같이 사용한다(값 하나만 있으면 행과 열에 동일하게 적용).

```css
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 50px 150px 300px;
  grid-template-rows: 1fr 3fr;
  gap: 30px 10px;
}
```

## 3. grid-auto-columns / rows

`grid-template-columns/rows`에서 지정한 행과 열의 개수를 벗어나는 요소에 대해서 그 크기의 기본 크기를 지정하도록 한다.

```css
.container {
  display: grid;
  grid-template-columns: 100px 300px;
  grid-template-rows: 100px;
  grid-auto-rows: 300px;
}
```

## 4. 컨텐츠 정렬 (justify-content, align-content, place-content)

### (1) justify-content

grid content를 `수평 방향`으로 어떻게 정렬할지에 대한 속성(start, end, center, space-between, space-around 등).

### (2) align

grid content를 `수직 방향`으로 어떻게 정렬할지에 대한 속성. 컨테이너의 높이가 필수로 설정되어 있어야 한다.

### (3) place-content

align-conetn와 justify-content 동시에 지정할 수 있다.

```css
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  justify-content: end;
  align-content: center;
  /* place-content: align-content, justify-content */
  /* place-content: center end; */
}
```

## 5. 컨텐츠 내 아이템 각각의 정렬(justify-items, align-items, place-items)

### (1) justify-items

grid item 개별 요소를 `수평 방향`으로 어떻게 정렬할지에 대한 속성. space-between, space-around 속성 사용 x.

### (2) align-items

grid item 개별 요소를 `수직 방향`으로 어떻게 정렬할지에 대한 속성. space-between, space-around 속성 사용 x.

### (3) place-items

justify-items, align-items를 동시에 지정.

```css
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  justify-items: center;
  align-items: center;
  /* place-items: align-items, justify-items */
  /* place-items: center center; */
}
```

## 6. grid-template-areas

container 내부의 어떤 태그 영역에 이름을 지정하고 그 이름을 활용해 layout을 작성하는 방식.
이름을 지정하기 위해서는 `grid-area` 속성을 사용한다. container에서는 `grid-template-areas` 속성으로 지정한 이름에 접근해 grid를 그린다.
직관적으로 layout을 생성할 수 있는 장점이 있다.

```css
.container {
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header header header"
    "aside main main"
    "aside main main"
    "aside main main"
    "footer footer footer";
}

header {
  grid-area: header;
}

aside {
  grid-area: aside;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
```

## 7. grid-auto-flow

어떻게 배치할 것인지 정해지지 않은 item에 대해서 자동으로 배치될지 정해줄 수 있는 속성. 기본 값은 `row`로 설정돼 있다(어떻게 배치할 것인지 정해지지 않았을 경우 다음 row로 넘어간다).

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 300px;
  grid-auto-flow: column;
  grid-auto-columns: 20px;
}
```

# Grid - item

## 1. grid-column-start / end

해당 속성은 item이 차지하는 column의 시작점과 끝점을 지정할 수 있게 한다.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 300px;
  grid-template-rows: 100px 100px;
}

.item2 {
  background-color: #2ecc71;
  grid-column-start: 2;
  grid-column-end: 4;
}
```

위의 경우 item이 column 2번째부터 4번째까지 차지하게 된다.

## 2. grid-row-start / end

해당 속성도 마찬가지로 item이 차지하는 row의 시작점과 끝점을 지정할 수 있게 한다.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 300px;
  grid-template-rows: 100px 100px;
}

.item2 {
  background-color: #2ecc71;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
```

## 3. grid-column / row

grid-column-start / end와 grid-row-start / end를 동시에 지정할 수 있는 속성. start와 row를 슬래시로 구분해 입력.
span 값을 사용해 처음부터 몇 칸을 차지할지 지정할 수도 있다.

```css
.item2 {
  background-color: #2ecc71;
  /* grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3; */

  grid-column: 2 / 4;
  /* grid-column: 2 / span 2; */

  grid-row: 1 / 3;
}
```

## 4. justify-self, align-self, place-self

`justify-self`는 item 자기 자신의 수평 방향의 정렬을 지정한다. `align-self`는 item 자기 자신의 수직 방향의 정렬을 지정한다. `space-between`, `space-around` 속성을 사용할 수 없다. `place-self`는 순서대로 `align-self justify-self`값을 동시에 지정할 수 있다. 하나만 입력할 경우 2개가 값을 속성을 갖는다.

```css
.item2 {
  background-color: #2ecc71;
  justify-self: center;
  align-self: center;
}
```

## 5. order

order 속성을 사용해 시각적으로 보이는 순서를 바꿀 수 있다. 값이 낮을수록 더 높은 우선순위를 갖는다. 기본 값은 0이며, 아래와 같은 예제의 경우 가장 먼저 나오는 요소로 배치된다.

```css
.item2 {
  background-color: #2ecc71;
  order: -1;
}
```
