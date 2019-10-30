console.log(taewoo) // undefined, error x
var taewoo = '김태우'

/*
var taewoo // hoisting
console.log(taewoo)
taewoo = '김태우'
*/

console.log(moomoo) // ReferenceError - 초기화하기 전 접근 금지
let moomoo = '무무쓰'

/*
var
1. 선언과 동시에 초기화
2. 할당

let, const는 TDZ(Temporal Dead Zone)이 존재
1. 선언
2. TDZ
3. 초기화
4. 할당
*/