# Javascript

## Array

### String.prototype.toString()

```javascript
let arr = [1, 2, 3];
console.log(arr.toString());
// "1,2,3"
```

> Iteration

```javascript
const arr = [1, 3, 6, 9];

// for in ( => index)
for(let something in arr) {
    console.log(something);
    // 0, 1, 2, 3
}

// for of ( => value)
for(let something of arr) {
	console.log(something);
    // 1, 3, 6, 9
}

// for of with entries ( => index, value)
for(let [something, anything] of arr.entries()) {
	console.log(something, anything)
    // 0 1, 1 3, 2 6, 3, 9
}
```



### Array.prototype.slice()

```javascript
const animals = ['ant', 'bear', 'camel', 'duck', 'elephant']

console.log(animals.slice(2));
// ['camel', 'duck', 'elephant']

console.log(animals.slice(2, 4));
// ['camel', 'duck']
```

### Array.prototype.forEach()

```javascript
const array1 = ['a', 'b', 'c'];

array1.forEach(e => console.log(e));
// 'a'
// 'b'
// 'c'
```

### Array Iteration

```javascript
let arr = ['a', 'b', 'c'];
for(let i = 0; i< arr.length; i++) {
    console.log(arr[i])
}

for(let value of arr) {
    console.log(value)
}

// for object not array(including in object)
for(let index in arr) {
    console.log(index)
    // 0, 1, 2
}
```

### Array.prototype.map()

```javascript
const array1 = [1, 4, 9, 16];

const map1 = array1.map(num => num * 2);
// Array [2, 8, 18, 32]
```

### Array.prototype.filter()

```javascript
const words = ['spary', 'limit', 'elite', 'exuberant', 'destruction'];
const result = words.filter(word => word.length > 6);

console.log(result);
// ['exuberant', 'destruction']
```

### Array.prototype.concat()

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// ['a', 'b', 'c', 'd', 'e', 'f']
```



## String

### String.prototype.concat()

```javascript
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// "Hello World"

console.log(str2.concat(', ', str1));
// "World, Hello"
```

### String.indexOf()

```javascript
'Blue Whale'.indexOf('Blue');		// returns 0
'Blue Whale'.indexOf('Blute');		// returns -1
'Blue Whale'.indexOf('Whale', 0);	// returns 5
'Blue Whale'.indexOf('Whale', 5);	// returns 5
'Blue Whale'.indexOf('Whale', 7);	// returns -1
'Blue Whale'.indexOf('');			// returns 0
'Blue Whale'.indexOf('', 9);		// returns 9
'Blue Whale'.indexOf('', 10);		// returns 10
'Blue Whale'.indexOf('', 11);		// returns 10
```

> 존재 여부 확인(임의의 문자열에 특정 문자열이 있는지 확인)

```javascript
'Blue Whale'.indexOf('Blue') !== -1; // true
'Blue Whale'.indexOf('Bloo') !== -1; // false
```



## ES6

### Rest Operator

```javascript
const obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
const {a, b, ...rest} = obj;
console.log(rest)
// {c: 3, d: 4, e: 5}
```

### Spread Operator

```javascript
const arr = [1, 2, 3];
const arrCopy = [...arr, ...arr] // [1, 2, 3, 1, 2, 3]

function foo(num1, num2, num3, num4) {
    console.log(num1, num2, num3, num4)
}

foo(...arrCopy);
// 1 2 3 1
```

### static method

 정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화 되면 호출 할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다.

```javascript
class ClassWithStaticMethod {
    static staticMethod() {
        return 'static method has been called';
    }
}

console.log(ClassWithStaticMethod.staticMethod());
```



## 비동기 처리, 콜백, Promise, async & await 

[캡틴판교 1편 비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)

[캡틴판교 2편 Promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)

[캡틴판교 3편 async & await](https://joshua1988.github.io/web-development/javascript/js-async-await/)



## this: call, apply, bind

> call

call 메서드는 메서드의 호출 주체인 함수를 즉시 실행하도록 하는 명령

```javascript
Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])
```

(1) 함수를 실행할 때

```javascript
var func = function(a, b, c) {
    console.log(this, a, b, c);
}

func(1, 2, 3); //Window 1 2 3 ---- this가 window
func.call({x: 1}, 4, 5, 6)	// Object 4 5 6 ---- this가 {x: 1}
```

(2) 메서드를 실행할 때

```javascript
var obj = {
    a: 1,
    method: function(x, y) {
        console.log(this.a, x, y);
    }
};

obj.method(2, 3);	// 1 2 3
obj.method.call({a: 4}, 5, 6);	// 4 5 6
```



> apply

call 메서드와 기능적으로 완전히 동일하나, apply 메서드는 두 번째 인자를 배열로 받아 그 배열의 요소들을 호출할 함수의 매개변수로 지정한다.

```javascript
var func = function(a, b, c) {
    console.log(this, a, b, c);
};

func.apply({x: 1}, [4, 5, 6]) // {x: 1} 4 5 6

var obj = {
    a: 1,
    method: function(x, y) {
        console.log(this.a, x, y);
    }
};
obj.method.apply({a: 4}, [5, 6]);	// 4, 5, 6
```



> bind

call과 비슷하나 즉시 호출하지 않고 넘겨받은 this와 인수들을 바탕으로 새로운 함수를 반환만 하는 메서드. 새로운 함수를 호출할 때 인수를 넘기면 기존 bind메서드를 호출할 때 전달했던 인수들의 뒤에 이어서 등록

```javascript
var func = function(a, b, c, d) {
    console.log(this, a, b, c, d);
}
func(1, 2, 3, 4);
// window { ... } 1 2 3 4

var bindFunc1 = func.bind({x: 1});
bindFunc1(5, 6, 7, 8);	// {x: 1} 5 6 7 8

var bindFunc2 = func.bind({x: 1}, 4, 5);
bindFunc2(6, 7);	// {x: 1} 4 5 6 7
bindFunc2(8, 9);	// {x: 1} 4 5 8 9
```



## JSON parse, stringify

> parse: JSON 문자열을 JS 값이나 객체로 변환

```javascript
const json = '{"result": true, "count": 42}';
const obj = JSON.parse(json);
// 객체 생성
```

> stringify: JS 값이나 객체를 JSON 문자열로 변환

```javascript
console.log(JSON.stringify({x: 5, y: 7}));
// "{"x": 5, "y": 6}"
```

