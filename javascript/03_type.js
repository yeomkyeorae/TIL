/*
* 원시타입(primitive data type)
    - boolean
    - null
    - undefined
    - number
    - string
    - symbol (ES6+)

* 객체타입(object)
    - object
*/

// number (typeof : type 확인)
3
-5
Infinity
NaN  // Not a Number
0/0  // NaN
2.14e4
2.14e-4

// string
let myName = '타키'
myName = '타\n키'
// `(backtick) : ES6| 템플릿리터럴
myName = `타
키`
console.log(`안녕하세요, ${myName}입니다.`)

// boolean
true
false

// empty value
undefined  // type -> undefined
null  // type -> object

