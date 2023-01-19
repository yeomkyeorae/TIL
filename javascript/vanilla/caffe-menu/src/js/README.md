- document.querySelector 축약 함수

```javascript
const $ = (selector) => document.querySelector(selector);
```

- insertAdjacentHTML - 선택한 요소의 인접한 부분에 HTML 삽입

- 이벤트 위임: todo로 추가하는 li 태그 대신 ul 태그에 이벤트를 위임한다.

- e.target.classList.contains로 특정 class를 갖고 있는지 확인할 수 있다.

- e.target.closest("li").querySelector(".menu-name")

- e.target.closest("li").remove() - li element 삭제

- innerHTML vs innerText

- localStorage on store

- data 식별자 속성(html에서 data-로 지정 및 JS에서 dataset으로 접근)

```html
<div data-category-name="blended"></div>
```

```javascript
// ...
const categoryName = e.target.dataset.categoryName;
```
