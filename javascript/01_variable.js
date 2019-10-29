console.log('Happy! Hacking')
// var
// 재할당, 재선언 가능
console.log(name)   // undefined
var name = '변수'
// 변수 hoisting(호이스팅) 
// : 해당 스코프 범위 내에서 최상단에 변수의 선언을 함.
// var a
// console.log(a)
// a = '변수'

// let(ES6+)
// impossible redeclaration, 재할당 가능
// console.log(b)  // error: reference error
// let b = '변수'

// const(ES6+)
// impossible reassignment & redeclaration
const c = '상수'
// c = '다른 값'
// const c = '다른 상수'
// const tak // 선언만 불가능

// let, const vs var
// 재선언이 불가능하다. vs ㄱ가능하다.
// 블록 스코프 vs 함수 스코프
var outerVar = '밖'
if ( true ){
    var outerVar = '안'
    console.log(outerVar)   //안
}
console.log(outerVar)   //안

let outerLet = '밖'
if (true){
    let outerLet = '안'
    console.log(outerLet)   //안
}
console.log(outerLet)   //밖