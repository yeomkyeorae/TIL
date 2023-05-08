/*
    * 함수
*/
console.log(myAdd(1, 2))
// console.log(myAdd2(3, 4))   // error

// 선언식 -> hoisting 가능
function myAdd(a, b){
    return a + b
}

// 표현식
let myAdd2 = function(a, b){
    return a + b
}

/*
    * arrow function
    ES6+
*/

function myFunction(a) {
    console.log(a + 1)
}

// function 키워드 삭제 후 =>
let myArrowFunction = (a) => {return a + 1}
// 1-1. 인자가 하나라면, 소괄호 생략 가능
// 1-2. 문장이 한 줄이고, 리턴이라면 중괄호 및 return 키워드 생략 가능
let myArrowFunction1 = a => a + 1
console.log(myArrowFunction(2))

let square = function(num) {
    return num ** 2
}
let squareFunction = (num) => {return num ** 2}
let squareFunction2 = num => num ** 2


let greeting = function () {
    console.log('happy!')
}

greeting = () => {console.log('happy!')}
// 1-3. 인자가 없는 경우네는 () or _
greeting = _ => {console.log('happy!')}

// 1-4. 기본인자
let greeting2 = (name='타키') => name

/*
    * 익명함수
*/
(function(a) {
    return a * 10
}(100))
((a) => a * 10)(100)