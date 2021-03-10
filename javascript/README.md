# JAVASCRIPT

## 1. Variable

> var

ES6+ 이전에 사용한 변수 형식. 해당 스코프 범위 내 최상단에 변수 선언을 하기 때문에 변수 선언 전에 오류없이(?, undefined) 사용할 수 있는 특징이 있는데 ... 그로 인해 애로사항이 많았다고 한다. `재선언`과 `재할당`이 가능하다. 변수 범위가 `함수 스코프`

> let

ES6+ 이후 등장한 새로운 변수 형식. 같은 이름으로 `재선언이 불가능`하다. `블록 스코프`

> const

`let`과 함께 등장한 변수. 이름(`상수`)처럼 `재할당과 재선언이 불가능`하다. `블록 스코프`

> `let`과 `var`의 `scope` 차이 예제

```javascript
let VarFunction = function() {
    var myVar = 0
    if (true) {
        var myVar = 1
        console.log(myVar) // 1
    }
    console.log(myVar) // 1
}

let LetFunction = function() {
    let myLet = 0 
    if (true) {
        // scope가 달라서 myLet선언이 가능
        let myLet = 1
        console.log(myLet) // 1
    }
    console.log(myLet) // 0
}

VarFunction()
LetFunction()
```



## 2. Hoisting

## 3. Array
### (1) Array.from 메소드
유사 배열 객체나 반복 가능한 객체를 얕게 복사해서 새로운 Array 객체를 만든다.

예시)
```javascript
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```
