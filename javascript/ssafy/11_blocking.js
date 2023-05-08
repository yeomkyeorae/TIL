// callstack <- event callback queue
//           ->
//         web API

function a(){
    console.log('a')  // 3.
}
console.log('hi')   // 1.
setTimeout(a, 3000)
console.log('bye')  // 2.

function printHello(){
    console.log('Hellooooo')
}

function baz(){
    console.log('baz')  // 1
    setTimeout(printHello, 0)   // 3, 비동기로 동작하는 함수
    console.log('baz end')  // 2
}

function bar(){
    console.log('bar')
    baz()
}

function foo(){
    console.log('foo')
    bar()
}

foo()


// return 값을 출력해야되는데 중간에 setTimeout이 있다면?
function sum(x, callbackfn){
    setTimeout(callbackfn, 1000, x + 1) // x + 1는 argument
}

var result = 0

sum(2, function(x){
    result = x
    console.log(result)
})

console.log(result)
// 자바스크립트는 기다려 주지 않는다.
// articles = Article.objects.all()
// context = {
//     ''
// }