# Javascript

## Array

### String.prototype.toString()

```javascript
let arr = [1, 2, 3];
console.log(arr.toString());
// "1,2,3"
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

