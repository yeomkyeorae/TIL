let userName = prompt('넌 누구야?')

let message

if (userName === 'ssafy') {
    message = '<h1>Hello SSAFY</h1>'
} else if (userName === '1q2w3e4r'){
    message = '<h1>Admin page입니다</h1>'
} else {
    message = `<h1>나는 ${userName}야</h1>`
}
document.write(message)

switch(userName) {
    case '1q2w3e4r': {
        message = '<h2>관리자님 충성!</h2>'
        break
    }
    case 'ssafy': {
        message = '<a href="https://edu.ssafy.com">Ssafy 출첵!</a>'
        break
    }
    default: {
        message = `<h1>${userName} 환영합니다. </h1>`
    }
}
document.write(message)

/*
    * 반복문
    var는 함수스코프를 가지고 있어서 for문 이후에 i 변수에 값이 유지된다.
    let은 블록스코프를 가지고 있어서 for문 이후에 해당 변수는 없음.
*/

for (var i=0; i<3; i++){
    console.log(i)
}
console.log(i) // 3

for (let j=0; j<3; j++){
    console.log(j)
}
// console.log(j) // referenceError


let myArray = ['태우', '경호', '은비']
for(let name of myArray){
    console.log(name)
}